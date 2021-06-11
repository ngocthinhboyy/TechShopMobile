import React from 'react';
import {Button, Text, View} from 'react-native';

const CartScreen = ({navigation}) => {
  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}>
      <Text style={{color: 'blue', fontSize: 30}}>Cart</Text>
      <Button
        title="Place Order"
        onPress={() => navigation.navigate('CheckOut')}
      />
      {/* <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      /> */}
    </View>
  );
};

CartScreen.propTypes = {};

export default CartScreen;
