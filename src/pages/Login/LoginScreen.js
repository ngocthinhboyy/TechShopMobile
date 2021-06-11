
import React from 'react';
import { Text, View, Button } from 'react-native';



const LoginScreen = ({ navigation, changeStatus }) => {
  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}>
      <Text style={{color: 'blue', fontSize: 30}}>Login</Text>
      <Button
        title="Login"
        onPress={() => changeStatus()}
      />
    </View>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
