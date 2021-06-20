import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Order from '../../../components/Order/Order';
const Pending = ({navigation, pendingOrderList}) => {
  const renderPendingOrderList = orderList => {
    if (orderList === undefined) return;
    return orderList.map((order, index) => {
      return <Order key={index} order={order} navigation={navigation} />;
    });
  };
  return (
    <View>
      <ScrollView style={{backgroundColor: '#fcebc6', height: '100%'}}>
        {renderPendingOrderList(pendingOrderList)}
      </ScrollView>
    </View>
  );
};

export default Pending;
