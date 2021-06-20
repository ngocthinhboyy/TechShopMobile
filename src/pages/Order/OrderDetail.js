import React, {Fragment, useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import OrderDetailProduct from '../../components/Order/OrderDetail/OrderDetailProduct';
import OrderDetailShipping from '../../components/Order/OrderDetail/OrderDetailShipping';
import {OrderDetailData} from '../../Data/orderDetailData'
import OrderDetailHeader from './OrderDetailHeader';

const OrderDetail = ({navigation, route}) => {
  const [orderDetail, setOrderDetail] = useState();
  useEffect(() => {
    const orderDetailList = OrderDetailData;
    
    let orderDetail = orderDetailList.find(
      order => order.invoiceID === parseInt(route.params.invoiceID),
    );
    setOrderDetail(orderDetail);
  }, []);
  return (
    <Fragment>
      <SafeAreaView style={styles.topContainer}></SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerNavbar}>
          <OrderDetailHeader navigation={navigation} />
        </View>
        <View style={styles.homeScreenContent}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {orderDetail === undefined ? null : (
              <React.Fragment>
                <OrderDetailShipping order={orderDetail} />
                <OrderDetailProduct order={orderDetail} />
              </React.Fragment>
            )}
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
