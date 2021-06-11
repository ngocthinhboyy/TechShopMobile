import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import HomeIcon from '../../components/FooterNavbar/HomeIcon';
import ShoppingCartIcon from '../../components/FooterNavbar/ShoppingCartIcon';
import AvatarIcon from '../../components/FooterNavbar/AvatarIcon';
import ProductIcon from '../../components/FooterNavbar/ProductIcon';
import OrderIcon from '../../components/FooterNavbar/OrderIcon';
const FooterNavbar = () => {
    return (
        <View style={{ flex: 0.7, backgroundColor: '#fcebc6', alignItems:'center'}}>
           <View style={{flex: 1, width: '90%', backgroundColor:'#fcebc6', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
               <HomeIcon/>
               <ProductIcon/>
               <ShoppingCartIcon/>
               <OrderIcon/>
               <AvatarIcon/>
            </View> 
        </View>
    );
};

export default FooterNavbar;