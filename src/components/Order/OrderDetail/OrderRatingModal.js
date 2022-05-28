import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import parseImages from '../../../helpers/parseImages';
import {Icon} from 'react-native-elements';
import ReviewApi from '../../../api/reviewApi';
import OrderApi from '../../../api/orderApi';
import {useDispatch} from 'react-redux';
import {getAllUserOrders} from '../../../utilities/slices/userSlice';

const OrderRatingModal = ({order, orderId, navigation, viewReview}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [alert, setAlert] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (viewReview) setModalVisible(true);
  }, [viewReview]);

  const updateReview = (review, productID) => {
    const listReview = reviews;

    for (let i = 0; i < listReview.length; i++) {
      if (listReview[i].productID === productID) {
        listReview[i].reviewContent = review;
        setReviews([...listReview]);
        return;
      }
    }
    listReview.push({
      reviewContent: review,
      productID,
    });
    setReviews([...listReview]);
  };

  const renderAReview = detail => {
    const images = parseImages(detail.images);
    return (
      <View
        style={{
          width: '100%',
          padding: 10,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Image
          source={{uri: images[0]}}
          style={{width: 90, height: 90, marginRight: 10}}
        />
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 15,
              }}>
              {detail.name}
            </Text>

            {detail.status === '1' ? (
              <Icon
                name="check-circle-outline"
                type="material"
                color="rgb(0,153,0)"
                size={25}
              />
            ) : detail.status === '0' ? (
              <Icon
                name="remove-circle-outline"
                type="material"
                color="red"
                size={25}
              />
            ) : null}
          </View>
          <Text
            style={{
              color: '#717171',
              fontStyle: 'italic',
              fontSize: 10,
            }}>
            Provided by
            <Text style={{fontWeight: '600', color: '#e77733'}}>TechShop</Text>
          </Text>
          {detail.reviewed ? (
            <TextInput
              multiline
              numberOfLines={2}
              style={{
                height: 40,
                marginTop: 10,
                borderWidth: 0.5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderColor: 'rgb(0,153,0)',
                padding: 10,
                width: 200,
              }}
              value={detail.reviewContent}
            />
          ) : (
            <>
              <TextInput
                onEndEditing={text => checkValidReview(text, detail.id)}
                multiline
                numberOfLines={2}
                style={{
                  height: 40,
                  marginTop: 10,
                  borderWidth: 0.5,
                  borderColor: '#eeeeee',
                  padding: 10,
                  width: 200,
                }}
                placeholder="Your valuable review"
                onChangeText={text => updateReview(text, detail.id)}
              />
              {alert && alert[detail.id] ? (
                <Text style={{color: 'red', fontSize: 10}}>
                  Please add review for {detail.name}
                </Text>
              ) : null}
            </>
          )}
        </View>
      </View>
    );
  };

  const checkValidReview = (review, productID) => {
    const listReview = reviews;
    for (let i = 0; i < listReview.length; i++) {
      if (listReview[i].productID === productID) {
        if (review && !listReview[i].reviewContent) {
          setAlert({
            ...alert,
            [productID]: true,
          });
        } else {
          const newAlert = {...alert};
          delete newAlert[productID];
          setAlert(newAlert);
        }
        return;
      }
    }
  };
  const submitReview = () => {
    let body = reviews.map(review => {
      return {
        productID: review.productID,
        reviewContent: review.reviewContent,
        rate: 1,
        orderID: orderId,
      };
    });
    ReviewApi.getRecommendationReviewStatus(body).then(res => {
      ReviewApi.addReview(res)
        .then(res =>
          OrderApi.updateOrderStatus(orderId).then(res => {
            dispatch(getAllUserOrders());

            setModalVisible(false);
          }),
        )
        .catch(err => console.log(err));
    });
  };

  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    paddingVertical: 15,
                    fontSize: 20,
                  }}>
                  Review your experience
                </Text>
                <Icon
                  name={'close'}
                  size={20}
                  color={'black'}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#dee2e6',
                }}></View>
              {order.detailedInvoices.map(product => (
                <React.Fragment key={product.id}>
                  {renderAReview(product)}
                </React.Fragment>
              ))}
              {order.detailedInvoices[0].reviewed ? null : (
                <View
                  style={{
                    backgroundColor: '#fff',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: 10,
                    borderRadius: 5,
                    fontSize: 10,
                    borderWidth: 1,
                    borderColor: '#e77733',
                  }}>
                  <Button
                    color="#e77733"
                    disabled={
                      reviews.length < order.detailedInvoices.length
                        ? true
                        : false
                    }
                    onPress={() => {
                      submitReview();
                      navigation.navigate('Order', {screen: 'Rating'});
                    }}
                    title="Submit your review"
                  />
                </View>
              )}
            </View>
          </View>
        </Modal>
      </View>
      <Pressable
        style={{
          textAlign: 'right',
        }}
        onPress={() => setModalVisible(true)}>
        <Text
          style={{color: '#e77733', fontWeight: 'bold', textAlign: 'center'}}>
          {order.detailedInvoices[0].reviewed
            ? 'View your review'
            : 'Write your review here!'}
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    width: '100%',
    // backgroundColor: 'rgb(0, 0, 0)',
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: '100%',
  },
  modalView: {
    opacity: 1,
    zIndex: 1050,
    width: '80%',
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderRatingModal;
