import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {OrderStatus} from '../../utilities/Constant';
import parseImages from '../../helpers/parseImages';
import OrderApi from '../../api/orderApi';
import {useDispatch} from 'react-redux';
import {getAllUserOrders} from '../../utilities/slices/userSlice';

const Order = ({navigation, order}) => {
  const dispatch = useDispatch();
  const updateStatusOrder = async () => {
    return await OrderApi.updateOrderStatus(order.id)
      .then(res => dispatch(getAllUserOrders()))
      .catch(err => console.log(err));
  };

  const cancelOrder = async () => {
    return await OrderApi.cancelOrder(order.id).then(res =>
      dispatch(getAllUserOrders()),
    );
  };

  const handlePrice = price => {
    if (price !== undefined) {
      var priceFormat = '';
      while (price > 1000) {
        if (price % 1000 !== 0) {
          priceFormat = '.' + (price % 1000) + priceFormat;
        } else {
          priceFormat = '.000' + priceFormat;
        }
        price = Math.floor(price / 1000);
      }
      return price.toString().concat(priceFormat);
    }
    return '';
  };

  const images = parseImages(order.firstProduct.images);

  const renderButtonForOrder = order => {
    switch (order.status) {
      case OrderStatus.PLACED_ORDER:
        return (
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
              You can cancel order before picking
            </Text>
            <Button
              title="Cancel Order"
              titleStyle={{fontSize: 12, fontWeight: '400', color: 'red'}}
              buttonStyle={{
                height: 35,
                width: 100,
                borderRadius: 5,
                backgroundColor: 'white',
                height: 35,
                borderColor: 'red',
                borderWidth: 0.5,
              }}
              onPress={() => {
                cancelOrder(order.id);
                navigation.navigate('Order', {tabRender: 'Cancelled'});
              }}
            />
          </View>
        );
      case OrderStatus.IN_HANDLING:
        return (
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
              Contact us to change order
            </Text>
            <Button
              title="Contact Us"
              titleStyle={{
                fontSize: 12,
                fontWeight: '400',
                color: 'rgb(0, 153, 0)',
              }}
              buttonStyle={{
                backgroundColor: 'white',
                height: 35,
                width: 90,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: 'rgb(0, 153, 0)',
              }}
            />
          </View>
        );
      case OrderStatus.SHIPPED:
        if (order.statusDetail == 'Deliveried Successfully') {
          return (
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
                Confirm if you received
              </Text>
              <Button
                title="Order Received"
                titleStyle={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'rgb(0, 153, 0)',
                }}
                buttonStyle={{
                  backgroundColor: 'white',
                  height: 35,
                  width: 110,
                  borderRadius: 5,
                  borderColor: 'rgb(0, 153, 0)',
                  borderWidth: 0.5,
                }}
                onPress={() => {
                  updateStatusOrder(order.id);
                  navigation.navigate('Order', {tabRender: 'Completed'});
                }}
              />
            </View>
          );
        } else {
          return (
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
                Your package will be delivered on time.
              </Text>
              <Button
                title="Contact Us"
                titleStyle={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'rgb(0, 153, 0)',
                }}
                buttonStyle={{
                  backgroundColor: 'white',
                  height: 35,
                  width: 90,
                  borderRadius: 5,
                  borderWidth: 0.5,
                  borderColor: 'rgb(0, 153, 0)',
                }}
              />
            </View>
          );
        }
      case OrderStatus.DELIVERIED:
        if (order.statusDetail === 'Reviewed')
          return (
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
                Thank you for your valuable review.
              </Text>
              <Button
                title="View your review"
                titleStyle={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'rgb(0, 153, 0)',
                }}
                buttonStyle={{
                  backgroundColor: 'white',
                  height: 35,
                  width: 120,
                  borderRadius: 5,
                  borderColor: 'rgb(0, 153, 0)',
                  borderWidth: 0.5,
                }}
                onPress={() =>
                  navigation.navigate('OrderDetail', {
                    invoiceID: order.id,
                    viewReview: true,
                  })
                }
              />
            </View>
          );
        else
          return (
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
                Rating your experience
              </Text>
              <Button
                title="Review"
                titleStyle={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'rgb(0, 153, 0)',
                }}
                buttonStyle={{
                  backgroundColor: 'white',
                  height: 35,
                  width: 120,
                  borderRadius: 5,
                  borderColor: 'rgb(0, 153, 0)',
                  borderWidth: 0.5,
                }}
                onPress={() =>
                  navigation.navigate('OrderDetail', {
                    invoiceID: order.id,
                    viewReview: true,
                  })
                }
              />
            </View>
          );

      default:
        break;
    }
  };
  return (
    <View style={{backgroundColor: '#fcf6e8', marginVertical: 10}}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fcf6e8',
          paddingVertical: 12,
          alignItems: 'center',
          borderBottomWidth: 0.2,
          borderBottomColor: '#a19791',
        }}>
        <View style={{width: '90%', alignItems: 'flex-end'}}>
          <Text
            style={{
              color: 'rgb(0, 153, 0)',
              fontWeight: '300',
              fontSize: 12,
              marginBottom: 5,
            }}>
            {order.statusDetail}
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: '#fcf6e8',
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: images[0]}}
            style={{width: 55, height: 55, marginRight: 10}}
          />
          <View style={{width: '83%'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              {order.firstProduct.name}
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <Text style={{fontSize: 12, fontWeight: '300'}}>
                Color: Space Gray
              </Text>
              <Text style={{fontSize: 12, fontWeight: '100'}}>
                x{order.firstProduct.name}
              </Text>
            </View>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 14, fontWeight: '300', color: '#e77733'}}>
                  {handlePrice(order.firstProduct.total)}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '300',
                    textDecorationLine: 'underline',
                    color: '#e77733',
                  }}>
                  đ
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          borderBottomWidth: 0.2,
          borderBottomColor: '#a19791',
          alignItems: 'center',
          paddingVertical: 6,
          backgroundColor: '#fcf6e8',
        }}
        onPress={() => {
          navigation.navigate('OrderDetail', {invoiceID: order.id});
        }}>
        <Text style={{fontSize: 11, fontWeight: '100'}}>
          View more products...
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          borderBottomWidth: 0.2,
          borderBottomColor: '#a19791',
          paddingVertical: 12,
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 13, fontWeight: '100'}}>
            {order.countItems}
            {order.countItems === 1 ? ' item' : ' items'}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="monetization-on"
              type="material"
              size={23}
              color="#e77733"
              style={{marginHorizontal: 5}}
            />
            <Text style={{fontSize: 14}}>Total: </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#e77733',
              }}>
              {handlePrice(order.total)}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '300',
                textDecorationLine: 'underline',
                color: '#e77733',
              }}>
              đ
            </Text>
          </View>
        </View>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        {renderButtonForOrder(order)}
      </View>
    </View>
  );
};

export default Order;
