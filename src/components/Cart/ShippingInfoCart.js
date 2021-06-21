import React from 'react';
import { Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';

const ShippingInfoCart = () => {

    const shippingInfo = {
      fullname: 'Phạm Ngọc Thịnh',
      phone: '(+84) 825 494 593',
      address: '207, Đường C25, Phường Tăng Nhơn Phú B, Quận 9, TP. Hồ Chí Minh',
    }
    return (
        <View style={{width: '100%', alignItems: 'center',borderBottomWidth: 0.17, borderTopColor: '#a19791'}}>
            <View style={{ width:'90%',flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon
                        name="location-on"
                        type="material-outlined"
                        color="black"
                        size={20}
                    />
                    <Text style={{fontSize: 14, marginHorizontal: 10}}>
                        Delivery Address
                    </Text>
                </View>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                            name="edit"
                            type="material"
                            color="black"
                            size={15}
                        />
                        <Text style={{fontSize: 12, marginHorizontal: 5}}>
                            Change
                        </Text>
                </TouchableOpacity>
                </View>
                <View style={{marginHorizontal: 30, marginBottom: 20}}>
                    <Text style={{fontSize: 13, fontWeight: '200', marginBottom: 7}}>
                    {shippingInfo.fullname}
                    </Text>
                    <Text style={{fontSize: 13, fontWeight: '200', marginBottom: 7}}>
                    {shippingInfo.phone}
                    </Text>
                    <Text style={{fontSize: 13, fontWeight: '200', marginBottom: 7}}>
                    {shippingInfo.address}
                    </Text>
                </View>
        </View>
    );
};

export default ShippingInfoCart;