import React, {Fragment} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import Login from '../User/Login';
const CartScreen = ({navigation}) => {
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#fcebc6', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Login/>
    </SafeAreaView>
    </Fragment>
  );
};

CartScreen.propTypes = {};

export default CartScreen;
