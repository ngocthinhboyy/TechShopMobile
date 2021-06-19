import React, { useState, useContext } from 'react';
import Stack from '../../navigations/stack-navigator/Stack';
import LoginScreen from '../Login/LoginScreen';
import UserScreen from './UserScreen';
import { AuthContext } from '../../context/authContext';

const UserStack = () => {
    const {isLoggedIn, changeLoginStatus} = useContext(AuthContext);
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      
      {!isLoggedIn ? (
        <Stack.Screen
          name="UserScreen"
          children={() => <LoginScreen changeStatus={changeLoginStatus} />}
          options={{title: 'Order'}}
        />
      ) : (
        <Stack.Screen name="UserScreen" component={UserScreen} />
      )}
    </Stack.Navigator>
  );
};

export default UserStack;