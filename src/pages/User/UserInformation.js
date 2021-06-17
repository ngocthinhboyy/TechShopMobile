import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ScrollView, Text } from 'react-native';
import AvatarAccount from '../../components/User/AvatarAccount';
import PurchasedOrderAccount from '../../components/User/PurchasedOrderAccount';
import SettingAccount from '../../components/User/SettingAccount';
import TechShopRewards from '../../components/User/TechShopRewards';

const UserInformation = ({navigation}) => {
    return (
       <View style= {styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                <AvatarAccount/>
                <PurchasedOrderAccount navigation={navigation}/>
                <SettingAccount/>
                <TechShopRewards/>
            </ScrollView>
       </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#fcebc6',
        marginTop: 20
    },
    scrollView: {
        width: '100%',
        backgroundColor: '#fcebc6'
    },
    scrollViewContent: {
        alignItems: 'center',
    }
})

export default UserInformation;