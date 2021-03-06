import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const SettingAccount = ({navigation}) => {
    return (
        <View style={{width: '85%'}}>
            <Text style={{fontSize: 13, fontWeight: '600', color:'#a19791'}}>Account settings</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("EditPersonalInfo")}} style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, marginTop: 30, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>Personal information</Text>
                <Icon                   
                 name='person-outline'
                    type='ionicon'
                />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>Payments and payouts</Text>
                <Icon                   
                 name='card-outline'
                    type='ionicon'
                />
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate("EditShippingInfo")}} style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>Shipping info</Text>
                <Icon                   
                 name='local-shipping'
                    type='material'
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("EditNotifications")}} style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>Notifications</Text>
                <Icon                   
                 name='notifications-outline'
                    type='ionicon'
                />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>Help centre</Text>
                <Icon                   
                 name='help-circle-outline'
                    type='ionicon'
                />
            </View>
        </View>
    );
};

export default SettingAccount;