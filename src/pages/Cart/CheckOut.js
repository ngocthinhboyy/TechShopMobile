import React from 'react';
import {Button, Text, View} from 'react-native';

const CheckOut = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Text style={{color: 'blue', fontSize: 30}}>Check Out</Text>
    </View>
  );
};

CheckOut.propTypes = {};

export default CheckOut;
