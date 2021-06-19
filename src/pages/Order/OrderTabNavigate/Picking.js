import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Order from '../../../components/Order/Order';

const Picking = ({navigation, pickingOrderList}) => {
    const renderPickingOrderList = orderList => {
        return orderList.map((order, index) => {
            return(
                <Order key={index} order={order} navigation={navigation}/>
            )
        })
    }
    return (
        <View>
            <ScrollView style={{backgroundColor: '#fcebc6', height: '100%'}}>
                {renderPickingOrderList(pickingOrderList)}
            </ScrollView>
        </View>
    );
};

export default Picking;