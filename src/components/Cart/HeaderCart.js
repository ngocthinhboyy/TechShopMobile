import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

const HeaderCart = ({navigation}) => {
    return (
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fcebc6',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fcebc6',
            }}>
            <Icon
              name="keyboard-backspace"
              type="material"
              color="black"
              size={35}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{marginLeft: 40}}>
            <Text style={{fontSize: 23, fontWeight: '500'}}>My Cart</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fcebc6',
              width: '20%',
            }}>
            <Icon
              type="ionicon"
              name="home-outline"
              color="black"
              onPress={() => navigation.navigate('Home')}
            />
            <Icon
              type="ionicon"
              name="search-outline"
              color="black"
              onPress={() => navigation.navigate('Product')}
            />
          </View>
        </View>
    );
};

export default HeaderCart;