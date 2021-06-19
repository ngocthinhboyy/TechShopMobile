import React, { useState, useContext } from 'react';
import Stack from '../../navigations/stack-navigator/Stack';
import LoginScreen from '../Login/LoginScreen';
import OrderScreen from './OrderScreen';
import { AuthContext } from '../../context/authContext';

const OrderStack = ({navigation, route}) => {
  const {isLoggedIn, changeLoginStatus} = useContext(AuthContext);
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      
      {!isLoggedIn ? (
        <Stack.Screen
          name="OrderScreen"
          children={() => <LoginScreen changeStatus={changeLoginStatus} />}
          options={{title: 'Order'}}
        />
      ) : (
        <Stack.Screen name="OrderScreen">
          {props => <OrderScreen {...props} route={route.params} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

OrderStack.propTypes = {};

export default OrderStack;
