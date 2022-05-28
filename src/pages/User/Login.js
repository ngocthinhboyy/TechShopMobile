import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import {
  AccessToken, LoginButton
} from 'react-native-fbsdk-next';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithFB, setFBToken } from '../../utilities/slices/userSlice';

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [info, setInfo] = useState({});
  const {error} = useSelector(state => state.user.data);

  const dispatch = useDispatch();

  const handleChangeInputText = (value, name) => {
    setInfo({...info, [name]: value});
  };

  const handleSubmit = e => {
    async function submitToLogin() {
      await dispatch(login(info));
    }
    submitToLogin();
  };
  const initUser = token => {
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(json => {
        async function submitToLoginFB(info) {
          await dispatch(loginWithFB(info));
        }
        submitToLoginFB({
          email: json.id,
          fullname: json.name,
        });
      })
      .catch(err => err);
  };
  
  return (
    <View
      style={{
        width: '85%',
        height: '85%',
        backgroundColor: '#fcf6e8',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        borderRadius: 30,
        shadowOpacity: 0.25,
        shadowRadius: 10,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: '600',
          paddingTop: 20,
        }}>
        Log in
      </Text>
      <View style={{width: '100%', marginTop: 20, backgroundColor: '#fcf6e8'}}>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#fcf6e8',
            alignItems: 'center',
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Input
            placeholder="Username"
            containerStyle={{width: '90%'}}
            inputStyle={{fontSize: 15}}
            autoCapitalize="none"
            name="username"
            type="text"
            onChangeText={text => handleChangeInputText(text, 'email')}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#fcf6e8',
            alignItems: 'center',
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Input
            placeholder="Password"
            containerStyle={{width: '90%'}}
            inputStyle={{fontSize: 15}}
            name="pswd"
            type="password"
            secureTextEntry={true}
            onChangeText={text => handleChangeInputText(text, 'pswd')}
            rightIcon={
              <Icon name="visibility" size={20} color="black" type="material" />
            }
          />
        </View>
        <View
          style={{
            backgroundColor: '#fcf6e8',
            width: '90%',
            marginBottom: 30,
            marginTop: 20,
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 12, fontWeight: '300'}}>
            Forgot password?
          </Text>
          {error ? (
            <Text style={{fontSize: 12, fontWeight: '300'}}>{error}</Text>
          ) : null}
        </View>
      </View>
      <View style={{backgroundColor: '#fcf6e8', marginBottom: 30}}>
        <Button
          title="Log in"
          titleStyle={{fontSize: 17, fontWeight: '600'}}
          buttonStyle={{
            backgroundColor: '#e77733',
            width: 250,
            borderRadius: 30,
          }}
          onPress={handleSubmit}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fcf6e8',
          width: '80%',
          height: 40,
          marginBottom: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{backgroundColor: '#a6a7a6', width: '35%', height: 1}}></View>
        <Text style={{fontSize: 15, fontWeight: '200', color: '#a6a7a6'}}>
          or
        </Text>
        <View
          style={{backgroundColor: '#a6a7a6', width: '35%', height: 1}}></View>
      </View>
      <View style={{backgroundColor: '#fcf6e8', marginBottom: 30}}>
        <Button
          title="  Continue with Apple"
          titleStyle={{fontSize: 15, fontWeight: '600'}}
          buttonStyle={{backgroundColor: 'black', width: 250, borderRadius: 30}}
          icon={
            <Icon name="logo-apple" size={20} color="white" type="ionicon" />
          }
        />
      </View>
      <View style={{backgroundColor: '#fcf6e8', marginBottom: 30}}>
        {/* <Button
          title="  Continue with Facebook"
          titleStyle={{fontSize: 15, fontWeight: '600'}}
          buttonStyle={{
            backgroundColor: '#4267b2',
            width: 250,
            borderRadius: 30,
          }}
          icon={
            <Icon name="logo-facebook" size={20} color="white" type="ionicon" />
          }
        /> */}
        {/* <Button
        title={'Login with Facebook'}
        onPress={() => {
          LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            function (result) {
              console.log("hiii")
              if (result.isCancelled) {
                alert('Login Cancelled ' + JSON.stringify(result));
              } else {
                console.log(result)
                alert(
                  'Login success with  permisssions: ' +
                    result.grantedPermissions.toString(),
                );
                alert('Login Success ' + result.toString());
              }
            },
            function (error) {
              alert('Login failed with error: ' + error);
            },
          );
        }}
      /> */}

        <LoginButton
          publishPermissions={['publish_actions']}
          permissions={['public_profile', 'email', 'user_gender']}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ', result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                const {accessToken} = data;
                dispatch(setFBToken(accessToken))
                initUser(accessToken);
              });
            }
          }}
        />
      </View>
    </View>
  );
};

export default Login;
