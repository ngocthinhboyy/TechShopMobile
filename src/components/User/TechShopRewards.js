import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const TechShopRewards = () => {
    return (
        <View style={{width: '85%', marginVertical: 20}}>
        <Text style={{fontSize: 13, fontWeight: '600', color:'#a19791'}}>Shopping Info</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, marginTop: 30, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
            <Text style={{fontSize: 17, fontWeight: '300'}}>TechShop Rewards</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon                   
                    name='diamond'
                    type='font-awesome'
                    size={17}
                    color='#ee8241'
                />
                <Text style={{fontSize: 11, fontWeight: '200', marginLeft: 10, color:'#ee8241'}}>Diamond Member</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>Shopping Vouchers</Text>
                <Icon                   
                    name='receipt'
                    type='material'
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>My Coins</Text>
                <Icon                   
                    name='monetization-on'
                    type='material'
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>Recently Viewed</Text>
                <Icon                   
                    name='time-outline'
                    type='ionicon'
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, borderBottomWidth: 0.2, paddingBottom: 10, borderBottomColor: '#a19791'}}>
                <Text style={{fontSize: 17, fontWeight: '300'}}>My Likes</Text>
                <Icon                   
                    name='favorite-border'
                    type='material'
                />
            </View>
    </View>
);
};

export default TechShopRewards;