import React, {useState, useContext} from 'react';
import Stack from '../../navigations/stack-navigator/Stack';
import CartScreen from './CartScreen';
import CheckOut from './CheckOut';
import LoginScreen from '../Login/LoginScreen';
import { AuthContext } from '../../context/authContext';

const CartStack = ({navigation}) => {
  const {isLoggedIn, changeLoginStatus} = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isLoggedIn ? (
        <Stack.Screen
          name="CheckOut"
          children={() => <LoginScreen changeStatus={changeLoginStatus} />}
          options={{title: 'Check Out'}}
        />
      ) : (
        <Stack.Screen name="CartScreen" component={CartScreen} />
      )}
    </Stack.Navigator>
  );
};

CartStack.propTypes = {};

export default CartStack;
