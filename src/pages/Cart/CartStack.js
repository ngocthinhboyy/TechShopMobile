import React from 'react';
import { useSelector } from "react-redux";
import Stack from '../../navigations/stack-navigator/Stack';
import LoginScreen from '../Login/LoginScreen';
import CartScreen from './CartScreen';

const CartStack = ({navigation}) => {
  const { isLoggedIn } = useSelector((state) => state.user.data);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isLoggedIn ? (
        <Stack.Screen
          name="CheckOut"
          children={() => <LoginScreen />}
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
