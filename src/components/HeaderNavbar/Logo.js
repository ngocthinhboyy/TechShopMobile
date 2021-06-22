import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Logo = ({navigation}) => {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
            {/* <Image
                style={styles.imageLogo}
                source={require('../../assets/img/logo.jpg')}
            /> */}
            <Text style={styles.text}>TechShop</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imageLogo: {
        width: 70,
        height: 50
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    }
})

export default Logo;