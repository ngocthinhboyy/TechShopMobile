/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { RootNavigator } from './src/navigations/RootNavigator';
import AuthProvider from './src/context/authContext';


const App = () => {
  return <AuthProvider>
  <RootNavigator />
</AuthProvider>;
};

export default App;
