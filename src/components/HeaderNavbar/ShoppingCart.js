import React from 'react';
import {Text} from 'react-native';
import { Icon } from 'react-native-elements';

const ShoppingCart = ({navigation}) => {
    return (
        <Icon
        onPress = {() => {navigation.navigate("Cart")}}
        name='shopping-cart'
        color='black' />
    );
};

export default ShoppingCart;