import React, {Fragment, useState} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {ImageBackground,View, Text, Button, SafeAreaView} from 'react-native';
import Login from './Login';
import UserInformation from './UserInformation';

const UserScreen = ({navigation}) => {
  const [alreadyLogin, setalreadyLogin] = useState(false);
  return (
    <Fragment>
    <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>  
    <SafeAreaView style={alreadyLogin ? styles.containerNotYetLogin : styles.containerAlreadyLogin}>
      <UserInformation navigation={navigation}/>
    </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  containerNotYetLogin: {
    flex: 1 ,
    backgroundColor: '#fcebc6',
     position: 'absolute', 
     top: 0, 
     left: 0, 
     right: 0, 
     bottom: 0, 
     justifyContent: 'center',
      alignItems: 'center'
  },
  containerAlreadyLogin: {
    flex: 1,
    backgroundColor: '#fcebc6',
    alignItems: 'center'
  }
})

UserScreen.propTypes = {};

export default UserScreen;
