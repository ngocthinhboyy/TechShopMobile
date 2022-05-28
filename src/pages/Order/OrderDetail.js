import React, {Fragment, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import OrderDetailProduct from '../../components/Order/OrderDetail/OrderDetailProduct';
import OrderDetailShipping from '../../components/Order/OrderDetail/OrderDetailShipping';
import OrderDetailHeader from './OrderDetailHeader';
import OrderApi from '../../api/orderApi';
import OrderRatingModal from '../../components/Order/OrderDetail/OrderRatingModal';
import {OrderStatus} from '../../utilities/Constant';

const OrderDetail = ({navigation, route}) => {
  const [order, setOrder] = useState();
  const orderId = route.params.invoiceID;
  const viewReview = route.params.viewReview;
  useEffect(() => {
    const getDetailedOrder = async () => {
      await OrderApi.getOrder(orderId).then(res => {
        setOrder(res);
      });
    };
    getDetailedOrder();
  }, [orderId]);
  return (
    <Fragment>
      <SafeAreaView style={styles.topContainer}></SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerNavbar}>
          <OrderDetailHeader navigation={navigation} />
        </View>
        {order ? (
          <View style={styles.homeScreenContent}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <React.Fragment>
                <OrderDetailShipping order={order} />
                <OrderDetailProduct order={order} />
                {order.status === OrderStatus.DELIVERIED ? (
                  // &&
                  // order.statusDetail !== 'Reviewed'
                  <OrderRatingModal
                    order={order}
                    orderId={orderId}
                    viewReview={viewReview}
                    navigation={navigation}
                  />
                ) : null}
              </React.Fragment>
            </ScrollView>
          </View>
        ) : null}
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
