import React, {Fragment} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import OrderDetailProduct from '../../components/Order/OrderDetail/OrderDetailProduct';
import OrderDetailShipping from '../../components/Order/OrderDetail/OrderDetailShipping';
import OrderDetailHeader from './OrderDetailHeader';

const OrderDetail = ({navigation}) => {
    const orderDetail = {
        "detailedInvoices": [
            {
                "productID": 3,
                "productPrice": 9000000,
                "quantity": 1,
                "totalPrice": 9000000,
                "productName": "Smart Watch 3",
                "isReviewed": true
            },
            {
                "productID": 5,
                "productPrice": 2000000,
                "quantity": 1,
                "totalPrice": 2000000,
                "productName": "Smart Watch 5",
                "isReviewed": true
            }
            ,
            {
                "productID": 51,
                "productPrice": 20000000,
                "quantity": 2,
                "totalPrice": 40000000,
                "productName": "Iphone 12 Pro",
                "isReviewed": false
            }
        ],
        "shippingInfo": {
            "fullname": "Phạm Ngọc Thịnh",
            "phone": "(+84) 825 494 593",
            "address": "207, Đường C25, Phường Tăng Nhơn Phú B, Quận 9, TP. Hồ Chí Minh"
        },
        "email": null,
        "totalPrice": 51000000,
        "note": null,
        "statusInvoice": "COMPLETED",
        "shippingDate": "11-06-2021",
        "invoiceDate": "08-06-2021"
    };
    return (
        <Fragment>
        <SafeAreaView style={styles.topContainer}></SafeAreaView>
        <SafeAreaView style={styles.container}>
          <View style={styles.headerNavbar}>
            <OrderDetailHeader navigation={navigation} />
          </View>
          <View style={styles.homeScreenContent}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <OrderDetailShipping order={orderDetail}/>
              <OrderDetailProduct order={orderDetail}/>
            </ScrollView>
          </View>
        </SafeAreaView>
      </Fragment>
    );
};
const styles = StyleSheet.create({
    headerNavbar: {
      flex: 0.7,
      backgroundColor: '#fcebc6',
      alignItems: 'center',
    },
    homeScreenContent: {
      flex: 9.3,
      backgroundColor: '#fcebc6',
    },
    scrollView: {
      backgroundColor: '#fcebc6',
      alignItems: 'center',
    },
    topContainer: {
      flex: 0,
      backgroundColor: '#fcebc6',
    },
    container: {
      flex: 1,
      backgroundColor: '#fcebc6',
    },
  });
  
OrderDetail.propTypes = {};
export default OrderDetail;