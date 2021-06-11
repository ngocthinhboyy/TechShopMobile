import React from 'react';
import { Text, View } from 'react-native';

const OrderScreen = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Text style={{color: 'blue', fontSize: 30}}>Your order</Text>
    </View>
  );
};

OrderScreen.propTypes = {};

export default OrderScreen;
