import React, {Fragment} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import BuyCart from '../../components/Cart/BuyCart';
import HeaderCart from '../../components/Cart/HeaderCart';
import ProductListCard from '../../components/Cart/ProductListCard';
import ShippingInfoCart from '../../components/Cart/ShippingInfoCart';
const CartScreen = ({navigation}) => {

  const productCartList = [
    {
      productId: 1,
      productImage: require('../../assets/img/console1.jpeg'),
      productName: 'Play Station 4',
      productPrice: 23000000,
      productCategory: 'Console',
      quantity: 1, 
    },
    {
      productId: 2,
      productImage: require('../../assets/img/console2.jpeg'),
      productName: 'Play Station 5',
      productPrice: 25000000,
      productCategory: 'Console',
      quantity: 2, 
    },
    {
      productId: 53,
      productImage: require('../../assets/img/mac5.jpeg'),
      productName: 'Macbook Pro 15inch Retina Pro',
      productPrice: 40000000,
      productCategory: 'Laptop',
      quantity: 1, 
    },
    {
      productId: 54,
      productImage: require('../../assets/img/mac3.jpeg'),
      productName: 'Macbook Pro 2020',
      productPrice: 51000000,
      productCategory: 'Laptop',
      quantity: 1, 
    },
  ]

  const caculateTotalPrice = (productList) => {
    let total = 0;
    productList.map( product => {
      total+= (product.productPrice * product.quantity);
    })
    return total
  }
  return (
    // <View
    //   style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}>
    //   <Text style={{color: 'blue', fontSize: 30}}>Cart</Text>
    //   <Button
    //     title="Place Order"
    //     onPress={() => navigation.navigate('CheckOut')}
    //   />
    //   {/* <Button
    //     title="Login"
    //     onPress={() => navigation.navigate('Login')}
    //   /> */}
    // </View>
    <Fragment>
      <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>  
      <SafeAreaView style={{backgroundColor: '#fcebc6',alignItems: 'center', height: '100%'}}>
        <HeaderCart navigation={navigation}/>
        <View style={{backgroundColor: '#fcebc6', width: '100%', height: '81%'}}>
          <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
              <ShippingInfoCart/>
              <ProductListCard productCartList={productCartList}/>
          </ScrollView>
        </View>
        <View style={{backgroundColor: '#fcf6e8', width: '100%', height: '8%', alignItems: 'center', justifyContent:'center' ,borderTopWidth: 0.2, borderTopColor: '#a19791',       shadowColor: '#000',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.2,
                shadowRadius: 1.5,}}>
          <View style={{backgroundColor: '#fcf6e8', width: '90%'}}>
            <BuyCart totalPrice={caculateTotalPrice(productCartList)}/>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

CartScreen.propTypes = {};

export default CartScreen;
