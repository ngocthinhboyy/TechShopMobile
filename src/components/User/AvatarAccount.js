import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk-next';
import {useDispatch} from 'react-redux';
import {clearData} from '../../utilities/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AvatarAccount = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('User');
  const {facebookToken} = state => state.user.data;
  useEffect(() => {
    AsyncStorage.getItem('fullname').then(res => setName(res));
  }, []);
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <View
        style={{
          width: '85%',
          backgroundColor: '#fcebc6',
          flexDirection: 'row',
          paddingVertical: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="account-circle" type="material" color="black" size={65} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditPersonalInfo');
            }}
            style={{marginLeft: 15, marginTop: 9}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 4,
                letterSpacing: 1,
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '300',
                color: '#ee8241',
                letterSpacing: 1.5,
              }}>
              Show Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Icon
            name="log-out-outline"
            type="ionicon"
            size={30}
            onPress={() => {
              dispatch(clearData());
              let logout = new GraphRequest(
                'me/permissions/',
                {
                  accessToken: facebookToken,
                  httpMethod: 'DELETE',
                },
                (error, result) => {
                  if (error) {
                    console.log('Cannot logout!');
                  } else {
                    console.log('Logout!');
                    LoginManager.logOut();
                  }
                },
              );
              new GraphRequestManager().addRequest(logout).start();
            }}
          />
          <Text>Log out</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#a6a7a6',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 1.5,
        }}></View>
    </View>
  );
};

export default AvatarAccount;
