import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Logo from '../../components/HeaderNavbar/Logo';
import Search from '../../components/HeaderNavbar/Search';
import ShoppingCart from '../../components/HeaderNavbar/ShoppingCart';


const HeaderNavbar = () => {
    return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#fcebc6'}}>
            <Logo/>
            <Search/>
          </View>
          <ShoppingCart/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      width: '90%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fcebc6',
      alignItems:'center'
  }
})

export default HeaderNavbar;