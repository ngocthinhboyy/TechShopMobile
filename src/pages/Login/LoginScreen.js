
import React, {Fragment} from 'react';
import { SafeAreaView } from 'react-native';
import Login from '../User/Login';



const LoginScreen = ({ navigation, changeStatus }) => {

  return (
    // <View
    //   style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}>
    //   <Text style={{color: 'blue', fontSize: 30}}>Login</Text>
    //   <Button
    //     title="Login"
    //     onPress={() => changeStatus()}
    //   />
    // </View>

    <Fragment>
    <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>  
    <SafeAreaView style={{flex: 1, backgroundColor: '#fcebc6', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Login changeStatus={changeStatus}/>
    </SafeAreaView>
    </Fragment>
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;
