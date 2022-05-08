/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/app/store';
import AuthProvider from './src/context/authContext';
import CartProvider from './src/context/cartContext';
import { RootNavigator } from './src/navigations/RootNavigator';
import { setInit } from './src/utilities/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  AsyncStorage.getItem('user').then(result => {
    store.dispatch(setInit(result));
  });
  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
            <RootNavigator />
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
