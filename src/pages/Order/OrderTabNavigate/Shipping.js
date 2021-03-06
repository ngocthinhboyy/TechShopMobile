import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Order from '../../../components/Order/Order';

const Shipping = ({navigation, shippingOrderList}) => {
  const renderShippingOrderList = orderList => {
    if (orderList === undefined) return;
    return orderList.map((order, index) => {
      return <Order key={index} order={order} navigation={navigation} />;
    });
  };

  return (
    <View>
      <ScrollView style={{backgroundColor: '#fcebc6', height: '100%'}}>
        {renderShippingOrderList(shippingOrderList)}
      </ScrollView>
    </View>
  );
};

export default Shipping;
