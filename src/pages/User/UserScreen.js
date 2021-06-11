import React from 'react';
import {View, Text, Button} from 'react-native';

const UserScreen = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Text style={{color: 'blue', fontSize: 30}}>User</Text>
    </View>
  );
};

UserScreen.propTypes = {};

export default UserScreen;
