import React, {Fragment, useContext} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import BuyCart from '../../components/Cart/BuyCart';
import HeaderCart from '../../components/Cart/HeaderCart';
import ProductListCard from '../../components/Cart/ProductListCard';
import ShippingInfoCart from '../../components/Cart/ShippingInfoCart';
import {CartContext} from '../../context/cartContext';
const CartScreen = ({navigation}) => {
  const {cartData} = useContext(CartContext);
  const caculateTotalPrice = productList => {
    let total = 0;
    productList.map(product => {
      total += product.productPrice * product.quantity;
    });
    return total;
  };
  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>
      <SafeAreaView
        style={{
          backgroundColor: '#fcebc6',
          alignItems: 'center',
          height: '100%',
        }}>
        <HeaderCart navigation={navigation} />
        <View
          style={{backgroundColor: '#fcebc6', width: '100%', height: '81%'}}>
          <ScrollView
            style={{width: '100%'}}
            contentContainerStyle={{alignItems: 'center'}}>
            <ShippingInfoCart />
            <ProductListCard
              productCartList={cartData}
              navigation={navigation}
            />
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: '#fcf6e8',
            width: '100%',
            height: '8%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: 0.2,
            borderTopColor: '#a19791',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: -3},
            shadowOpacity: 0.2,
            shadowRadius: 1.5,
          }}>
          <View style={{backgroundColor: '#fcf6e8', width: '90%'}}>
            <BuyCart
              totalPrice={caculateTotalPrice(cartData)}
              navigation={navigation}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

CartScreen.propTypes = {};

export default CartScreen;
