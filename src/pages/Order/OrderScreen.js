import React, {Fragment, useEffect} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import Login from '../User/Login';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pending from './OrderTabNavigate/Pending';
import Shipping from './OrderTabNavigate/Shipping';
import Picking from './OrderTabNavigate/Picking';
import Rating from './OrderTabNavigate/Rating';
import Completed from './OrderTabNavigate/Completed';
import Cancelled from './OrderTabNavigate/Cancelled';


import {Icon} from 'react-native-elements';
const Tab = createMaterialTopTabNavigator();

const OrderScreen = ({navigation, route}) => {
  const listOrder = [
    {
        "invoiceID": 1,
        "userID": 3,
        "totalCost": 33000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "PENDING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com0",
        
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Macbook Pro M1 256GB 13.3-inch",
        "statusProcess": "Waiting to confirm"
    },
    {
      "invoiceID": 1,
      "userID": 3,
      "totalCost": 33000000,
      "invoiceDate": "2021-06-08",
      "shippingDate": "2021-06-11",
      "note": null,
      "otherShippingAddress": false,
      "statusInvoice": "PENDING",
      "userInvoiceIndex": "phuongdinh1802@gmail.com0",
      
      "countItems": 3,
      "quantity": 1,
      "totalPrice": 9000000,
      "productName": "Smart Watch 3",
      "statusProcess": "Confirmed"
  },
    {
        "invoiceID": 2,
        "userID": 3,
        "totalCost": 18000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "PENDING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com1",
                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Waiting to confirm"
    },
    {
        "invoiceID": 3,
        "userID": 3,
        "totalCost": 31000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "PICKING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com2",
        

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Picking",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "PICKING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Ready to ship",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "SHIPPING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Shipping",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "SHIPPING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Deliveried",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "SHIPPING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Shipping",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "RATING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Waiting to rate",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "RATING",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Waiting to rate",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "COMPLETED",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Completed",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "COMPLETED",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Completed",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "CANCELLED",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Cancelled",
    },
    {
        "invoiceID": 4,
        "userID": 3,
        "totalCost": 36000000,
        "invoiceDate": "2021-06-08",
        "shippingDate": "2021-06-11",
        "note": null,
        "otherShippingAddress": false,
        "statusInvoice": "CANCELLED",
        "userInvoiceIndex": "phuongdinh1802@gmail.com3",

                
        "countItems": 3,
        "quantity": 1,
        "totalPrice": 9000000,
        "productName": "Smart Watch 3",
        "statusProcess": "Cancelled",
    }
];

let pendingOrderList = listOrder.filter(order => {
  return order.statusInvoice === "PENDING";
});
let pickingOrderList = listOrder.filter(order => {
  return order.statusInvoice === "PICKING";
});
let shippingOrderList = listOrder.filter(order => {
  return order.statusInvoice === "SHIPPING";
})
let ratingOrderList = listOrder.filter(order => {
  return order.statusInvoice === "RATING";
})
let completedOrderList = listOrder.filter(order => {
  return order.statusInvoice === "COMPLETED"
})
let cancelledOrderList = listOrder.filter(order => {
  return order.statusInvoice === "CANCELLED"
})



  useEffect(() => {
    if (route?.tabRender === undefined) return;
    navigation.navigate(route?.tabRender);
  }, [navigation, route]); // render lai khi 2 thang thay doi

  return (
    <Fragment>
    <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>  
    <SafeAreaView style={{flex: 1, backgroundColor: '#fcebc6', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fcebc6',
      alignItems:'center',
      marginBottom: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#fcebc6'}}>
                <Icon
                name='keyboard-backspace'
                type='material'
                color='black'
                size= {35}
                onPress={()=> navigation.goBack()}
                />
          </View>
          <View style={{marginLeft: 40}}>
            <Text style={{fontSize: 23, fontWeight: '500'}}>My Orders</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#fcebc6', width: '20%'}}>
          <Icon
                    type= 'ionicon'
                    name='home-outline'
                    color='black'
                    onPress={()=> navigation.navigate('Home')}
                    />
                <Icon
                    type= 'ionicon'
                    name='search-outline'
                    color='black' 
                    onPress={()=> navigation.navigate('Product')}
                    />
          </View>
        </View>
      <Tab.Navigator initialRouteName={route?.tabRender || "Shipping"} swipeEnabled = 'true' style={{backgroundColor: '#fcebc6', width: '100%'}} tabBarOptions={{
        labelStyle:{
          fontSize: 15,
          fontWeight: '400',
          fontStyle: 'normal',
          textTransform: 'none',
          color: '#e77733'
        },
        scrollEnabled: true,
        tabStyle:{
          width: 110
        },
        activeTintColor: 'red',
        style:{
          backgroundColor: '#fcebc6'
        },
        indicatorStyle:{
          backgroundColor: '#e77733',
        }
      }}>
        <Tab.Screen name="Pending" >
          {() => <Pending pendingOrderList={pendingOrderList} navigation={navigation}/>}
        </Tab.Screen>
        <Tab.Screen name="Picking" >
          {() => <Picking pickingOrderList={pickingOrderList} navigation={navigation}/>}
        </Tab.Screen>
        <Tab.Screen name="Shipping" >
          {() => <Shipping shippingOrderList={shippingOrderList} navigation={navigation}/>}
        </Tab.Screen>
        <Tab.Screen name="Rating" >
          {() => <Rating ratingOrderList={ratingOrderList} navigation={navigation}/>}
        </Tab.Screen>
        <Tab.Screen name="Completed" >
          {() => <Completed completedOrderList={completedOrderList} navigation={navigation}/>}
        </Tab.Screen>
        <Tab.Screen name="Cancelled" >
          {() => <Cancelled cancelledOrderList={cancelledOrderList} navigation={navigation}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
    </Fragment>
  );
};

OrderScreen.propTypes = {};

export default OrderScreen;
