import {NavigationContainer} from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../pages/Login/LoginScreen';
import OrderDetail from '../pages/Order/OrderDetail';
import OrderScreen from '../pages/Order/OrderScreen';
import ProductDetail from '../pages/Product/ProductDetail/ProductDetail';
import Stack from './stack-navigator/Stack';
import TabNavigator from './TabNavigator';
import EditPersonalInfo from '../pages/User/EditPersonalInfo';
import EditShippingInfo from '../pages/User/EditShippingInfo';

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTab" component={TabNavigator} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Order" component={OrderScreen} options={{}}/>
      <Stack.Screen name="OrderDetail" component={OrderDetail} options={{}}/>
      <Stack.Screen name="EditPersonalInfo" component={EditPersonalInfo} />
      <Stack.Screen name="EditShippingInfo" component={EditShippingInfo} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
