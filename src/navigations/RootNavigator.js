import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginScreen from '../pages/Login/LoginScreen';
import ProductDetail from '../pages/Product/ProductDetail';
import Stack from './stack-navigator/Stack';
import TabNavigator from './TabNavigator';

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTab" component={TabNavigator} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
