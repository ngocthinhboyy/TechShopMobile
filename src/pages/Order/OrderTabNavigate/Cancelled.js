import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Order from '../../../components/Order/Order';

const Cancelled = ({navigation, cancelledOrderList}) => {
    const renderCancelledOrderList = orderList => {
        return orderList.map((order, index) => {
            return(
                <Order key={index} order={order} navigation={navigation}/>
            )
        })
    }
    return (
        <View>
            <ScrollView style={{backgroundColor: '#fcebc6', height: '100%'}}>
                {renderCancelledOrderList(cancelledOrderList)}
            </ScrollView>
        </View>
    );
};

export default Cancelled;