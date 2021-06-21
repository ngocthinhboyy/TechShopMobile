import React, {useContext} from 'react';
import {AuthContext} from '../../context/authContext';
import CartProvider from '../../context/cartContext';
import Stack from '../../navigations/stack-navigator/Stack';
import LoginScreen from '../Login/LoginScreen';
import CartScreen from './CartScreen';

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
