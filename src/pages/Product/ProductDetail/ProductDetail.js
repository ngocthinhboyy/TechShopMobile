import React, {Fragment, useState, useContext, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderProductDetail from './HeaderProductDetail';
import ProductImageCarousel from './ProductImageCarousel';
import {Icon, Button} from 'react-native-elements';
import {CartContext} from '../../../context/cartContext';
import ProductApi from '../../../api/productApi';
import {useDispatch} from 'react-redux';
import parseImages from '../../../helpers/parseImages';
import TrendingProductCard from '../ProductCard/TrendingProductCard';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const ProductDetail = ({navigation, route}) => {
  const addingTimeoutRef = useRef(null);
  const {addToCart} = useContext(CartContext);
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(false);
  const [product, setProduct] = useState(null);

  const [count, setCount] = useState(1);
  const images = product && parseImages(product.images);

  const [recommendProductList, setRecommendProductList] = useState([]);
  const [index, setIndex] = useState(4);
  const isCarousel = useRef(null);

  const scrollRef = useRef();

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const renderItem = ({item}) => {
    return (
      <TrendingProductCard
        product={item}
        navigation={navigation}
        onPressTouch={onPressTouch}
      />
    );
  };

  const addProductToCart = product => {
    if (isDisabled) return;
    setIsDisabled(true);
    addToCart(product);
    if (addingTimeoutRef.current) {
      clearTimeout(addingTimeoutRef.current);
    }
    addingTimeoutRef.current = setTimeout(() => {
      setIsDisabled(false);
    }, 500);
  };

  useEffect(() => {
    const productId = route.params.productId;
    const fetchProduct = async () => {
      return ProductApi.getDetailedProduct(productId);
    };

    fetchProduct()
      .then(response => {
        setProduct(response);
        ProductApi.getRecommendProductIds(productId).then(res => {
          if (res) {
            return ProductApi.getRecommendProductDetails(res.list_result)
              .then(res => {
                setRecommendProductList(res.filter(item => item));
              })
              .catch(() => setRecommendProductList([]));
          }
        }).catch(err => console.log(err))
      })
      .catch(() => {
        setProduct(null);
      });
  }, [dispatch, route.params.productId]);

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

  const renderDescription = productDescription => {
    var description = productDescription.replace(/'/g, '"');
    description = JSON.parse(description);
    return description.map((item, index) => (
      <View key={index}>
        <Text style={{fontSize: 16, fontWeight: '400'}}>{item.header}</Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '100',
            marginLeft: 30,
            marginTop: 5,
            marginBottom: 15,
            width: '90%',
            textAlign: 'justify',
          }}>
          {item.content}
        </Text>
      </View>
    ));
  };

  const renderSpecifications = productSpecification => {
    return productSpecification.map((item, index) => {
      if (index % 2 === 0) {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              width: '95%',
              padding: 10,
              backgroundColor: '#fcebc6',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                textTransform: 'capitalize',
              }}>
              {item.name}:{' '}
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '200',
                  color: 'black',
                  textTransform: 'capitalize',
                }}>
                {item.value}
              </Text>
            </Text>
          </View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              width: '95%',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: '400'}}>
              {item.name}:{' '}
              <Text style={{fontSize: 14, fontWeight: '200', color: 'black'}}>
                {item.value}
              </Text>
            </Text>
          </View>
        );
      }
    });
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.topContainer}></SafeAreaView>
      <SafeAreaView style={styles.container}>
        {product && (
          <>
            <View style={styles.headerNavbar}>
              <HeaderProductDetail navigation={navigation} />
            </View>
            <View style={styles.homeScreenContent}>
              <ScrollView
                contentContainerStyle={styles.scrollView}
                ref={scrollRef}>
                <ProductImageCarousel images={images} />
                <View style={{alignItems: 'flex-start', width: '90%'}}>
                  <Text style={{fontSize: 25, fontWeight: '500'}}>
                    {product.name}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '91%',
                  }}>
                  <View>
                    <View
                      style={{
                        marginTop: 10,
                        marginLeft: 3,
                        flexDirection: 'row',
                      }}>
                      <Text style={{fontStyle: 'italic'}}>Brand: </Text>
                      <Text style={{color: '#e77733'}}>
                        {product.brandName}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Icon name="star" color="#e77733" size={20} />
                      <Icon name="star" color="#e77733" size={20} />
                      <Icon name="star" color="#e77733" size={20} />
                      <Icon name="star" color="#e77733" size={20} />
                      <Icon name="star" color="gray" size={20} />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Text style={{fontSize: 20, fontWeight: '300'}}>
                        {handlePrice(product.price)}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '300',
                          textDecorationLine: 'underline',
                        }}>
                        đ
                      </Text>
                    </View>
                  </View>
                  <View style={{width: '35%'}}>
                    <View
                      style={{
                        width: '85%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 30,
                        backgroundColor: '#f7deab',
                        marginVertical: 15,
                        borderRadius: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => setCount(count - 1)}
                        style={{
                          width: '30%',
                          backgroundColor: '#f7deab',
                          height: '60%',
                          justifyContent: 'center',
                          borderRightWidth: 1,
                        }}>
                        <Icon
                          name="remove"
                          type="material"
                          color="#272622"
                          size={15}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          width: '40%',
                          backgroundColor: '#f7deab',
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: 15, color: '#272622'}}>
                          {count}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => setCount(count + 1)}
                        style={{
                          width: '30%',
                          justifyContent: 'center',
                          backgroundColor: '#f7deab',
                          height: '60%',
                          borderLeftWidth: 1,
                        }}>
                        <Icon
                          name="add"
                          type="material"
                          color="#272622"
                          size={15}
                        />
                      </TouchableOpacity>
                    </View>
                    <Button
                      icon={
                        !isDisabled ? (
                          <Icon
                            name="add-shopping-cart"
                            size={20}
                            color="white"
                          />
                        ) : null
                      }
                      title={!isDisabled ? '  Add to Cart' : 'Added'}
                      titleStyle={{fontSize: 15, fontWeight: '300'}}
                      buttonStyle={
                        !isDisabled
                          ? {backgroundColor: '#e77733', marginRight: 20}
                          : {backgroundColor: 'rgb(0,153,0)', marginRight: 20}
                      }
                      onPress={() =>
                        addProductToCart({
                          productId: product.id,
                          productImage: images[0],
                          productName: product.name,
                          productPrice: product.price,
                          productCategory: product.categoryName,
                          quantity: count,
                        })
                      }
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '50%',
                    height: 1,
                    backgroundColor: '#a6a7a6',
                    marginTop: 30,
                  }}></View>
                <View
                  style={{
                    width: '90%',
                    marginTop: 15,
                  }}>
                  <Text
                    style={{color: '#e77733', fontSize: 20, marginBottom: 10}}>
                    Description
                  </Text>
                  <View style={{marginLeft: 20, width: '90%'}}>
                    {renderDescription(product.longDescrip)}
                  </View>
                </View>
                <View
                  style={{
                    width: '50%',
                    height: 1,
                    backgroundColor: '#a6a7a6',
                    marginTop: 30,
                  }}></View>
                {product.specifications.length > 0 && (
                  <>
                  <View
                    style={{
                      width: '90%',
                      marginTop: 25,
                    }}>
                    <Text
                      style={{
                        color: '#e77733',
                        fontSize: 20,
                        marginBottom: 10,
                      }}>
                      General Specifications
                    </Text>
                    <View
                      style={{
                        marginTop: 15,
                        paddingVertical: 15,
                        paddingLeft: 20,
                        backgroundColor: '#f7deab',
                        borderRadius: 20,
                        width: '100%',
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.25,
                        shadowRadius: 10,
                      }}>
                      {renderSpecifications(product.specifications)}
                    </View>
                  </View>
                  <View
                      style={{
                        width: '50%',
                        height: 1,
                        backgroundColor: '#a6a7a6',
                        marginTop: 30,
                      }}></View>
                  </>
                )}

                {recommendProductList.length > 0 ? (
                  <>
                    
                    <View
                      style={{
                        width: '90%',
                        marginTop: 25,
                      }}>
                      <Text
                        style={{
                          color: '#e77733',
                          fontSize: 20,
                          marginBottom: 10,
                        }}>
                        Related Products
                      </Text>
                      <Carousel
                        ref={isCarousel}
                        layout={'default'}
                        data={recommendProductList}
                        onSnapToItem={index => setIndex(index)}
                        sliderWidth={350}
                        itemWidth={130}
                        renderItem={renderItem}
                      />
                      <Pagination
                        containerStyle={{
                          backgroundColor: '#fcebc6',
                          padding: 0,
                          margin: 0,
                        }}
                        dotsLength={recommendProductList.length}
                        carouselRef={isCarousel}
                        activeDotIndex={index}
                        dotStyle={{
                          width: 8,
                          height: 1,
                          borderRadius: 5,
                          marginHorizontal: -10,
                          backgroundColor: 'rgba(0, 0, 0, 1)',
                        }}
                        inactiveDotOpacity={0.3}
                        inactiveDotScale={0.5}
                        tappableDots={true}
                      />
                    </View>
                  </>
                ) : null}
              </ScrollView>
            </View>
          </>
        )}
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  headerNavbar: {
    flex: 0.7,
    backgroundColor: '#fcebc6',
    alignItems: 'center',
  },
  homeScreenContent: {
    flex: 9.3,
    backgroundColor: '#fcebc6',
  },
  scrollView: {
    backgroundColor: '#fcebc6',
    alignItems: 'center',
  },
  topContainer: {
    flex: 0,
    backgroundColor: '#fcebc6',
  },
  container: {
    flex: 1,
    backgroundColor: '#fcebc6',
  },
});

ProductDetail.propTypes = {};

export default ProductDetail;
