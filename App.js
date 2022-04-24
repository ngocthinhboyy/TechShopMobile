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
import store from './src/app/store';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {setInit} from './src/utilities/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  AsyncStorage.getItem('user').then(result => {
    console.log(result)
    store.dispatch(setInit(result));
  });
  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <RootNavigator />
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
