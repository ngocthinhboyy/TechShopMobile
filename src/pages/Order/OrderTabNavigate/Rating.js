import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Order from '../../../components/Order/Order';

const Rating = ({navigation, ratingOrderList}) => {
  const renderRatingOrderList = orderList => {
    if (orderList === undefined) return;
    return orderList.map((order, index) => {
      return <Order key={index} order={order} navigation={navigation} />;
    });
  };
  return (
    <View>
      <ScrollView style={{backgroundColor: '#fcebc6', height: '100%'}}>
        {renderRatingOrderList(ratingOrderList)}
      </ScrollView>
    </View>
  );
};

export default Rating;
