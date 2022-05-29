
import React, {Fragment} from 'react';
import { SafeAreaView } from 'react-native';
import Login from '../User/Login';



const LoginScreen = ({ navigation }) => {

  return (
    <Fragment>
    <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>  
    <SafeAreaView style={{flex: 1, backgroundColor: '#fcebc6', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Login />
    </SafeAreaView>
    </Fragment>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
