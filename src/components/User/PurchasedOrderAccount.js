import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const PurchasedOrderAccount = ({navigation}) => {
    return (
        <View style={{width: '85%', margin: 20}}>
            <Text style={{fontSize: 13, fontWeight: '600', color:'#a19791'}}>Purchased orders</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10, marginTop: 30, borderBottomWidth: 0.5, paddingBottom: 30, borderBottomColor: '#a19791'}}>
                <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('Order',{tabRender: "Completed"})}>
                    <Icon                   
                    name='receipt-long'
                        type='material'
                        color='#ee8241'

                    size={40}
                    />
                    <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>Pending</Text>
                    <Text style={{fontSize: 13, fontWeight: '200'}}>Confirmation</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                    <Icon                   
                    name='storefront'
                        type='material'
                        color='#ee8241'
                    size={40}
                    />
                    <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>Picking (1)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                    <Icon                   
                    name='local-shipping'
                    type='material-outlined'
                    color='#ee8241'
                    size={40}
                    />
                    <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>Shipping (3)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                    <Icon                   
                    name='star-outline'
                    type='material'
                    color='#ee8241'
                    size={40}
                    />
                     <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>Rating</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PurchasedOrderAccount;