/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {RootNavigator} from './src/navigations/RootNavigator';
import AuthProvider from './src/context/authContext';
import CartProvider from './src/context/cartContext';
import OrderProvider from './src/context/orderContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <RootNavigator />
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
