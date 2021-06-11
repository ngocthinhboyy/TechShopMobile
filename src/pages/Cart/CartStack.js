import React, {useState} from 'react';
import Stack from '../../navigations/stack-navigator/Stack';
import CartScreen from './CartScreen';
import CheckOut from './CheckOut';
import LoginScreen from '../Login/LoginScreen';

const CartStack = ({navigation}) => {
  let [status, setStatus] = useState(false)
  
  // temp func to test login 
  const changeStatus = () => {
    setStatus(!status)
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      {!status ? (
        <Stack.Screen
          name="CheckOut"
          children={() => <LoginScreen changeStatus={changeStatus} />}
          options={{title: 'Check Out'}}
        />
      ) : (
        <Stack.Screen name="CheckOut" component={CheckOut} />
      )}
    </Stack.Navigator>
  );
};

CartStack.propTypes = {};

export default CartStack;
