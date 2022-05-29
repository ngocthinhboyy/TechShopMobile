import React from 'react';
import { useSelector } from "react-redux";
import Stack from '../../navigations/stack-navigator/Stack';
import LoginScreen from '../Login/LoginScreen';
import UserScreen from './UserScreen';

const UserStack = () => {
  const {isLoggedIn}  = useSelector((state) => state.user.data);
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      
      {!isLoggedIn ? (
        <Stack.Screen
          name="UserScreen"
          children={() => <LoginScreen />}
          options={{title: 'Order'}}
        />
      ) : (
        <Stack.Screen name="UserScreen" component={UserScreen} />
      )}
    </Stack.Navigator>
  );
};

export default UserStack;