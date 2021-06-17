import React, { useState } from 'react';
import Stack from '../../navigations/stack-navigator/Stack';
import LoginScreen from '../Login/LoginScreen';
import OrderScreen from './OrderScreen';

const OrderStack = ({navigation}) => {
  let [status, setStatus] = useState(false);

  // temp func to test login
  const changeStatus = () => {
    setStatus(!status);
  };
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      
      {!status ? (
        <Stack.Screen
        
          name="OrderScreen"
          children={() => <LoginScreen changeStatus={changeStatus} />}
          options={{title: 'Order'}}
        />
      ) : (
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      )}
    </Stack.Navigator>
  );
};

OrderStack.propTypes = {};

export default OrderStack;
