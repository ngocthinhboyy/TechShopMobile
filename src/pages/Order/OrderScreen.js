import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Fragment, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Cancelled from './OrderTabNavigate/Cancelled';
import Completed from './OrderTabNavigate/Completed';
import Pending from './OrderTabNavigate/Pending';
import Picking from './OrderTabNavigate/Picking';
import Shipping from './OrderTabNavigate/Shipping';
import {getAllUserOrders} from '../../utilities/slices/userSlice';
import Rating from './OrderTabNavigate/Rating';

const Tab = createMaterialTopTabNavigator();

const OrderScreen = ({navigation, route}) => {
  const {listOrders} = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  // get list orders
  useEffect(() => {
    async function fetchOrders() {
      await dispatch(getAllUserOrders());
    }

    fetchOrders();
  }, [route]);

  useEffect(() => {
    if (route?.tabRender === undefined) return;
    navigation.navigate(route?.tabRender);
  }, [navigation, route]); // render lai khi 2 thang thay doi

  return listOrders ? (
    <Fragment>
      <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fcebc6',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fcebc6',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fcebc6',
            }}>
            <Icon
              name="keyboard-backspace"
              type="material"
              color="black"
              size={35}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{marginLeft: 40}}>
            <Text style={{fontSize: 23, fontWeight: '500'}}>My Orders</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fcebc6',
              width: '20%',
            }}>
            <Icon
              type="ionicon"
              name="home-outline"
              color="black"
              onPress={() => navigation.navigate('Home')}
            />
            <Icon
              type="ionicon"
              name="search-outline"
              color="black"
              onPress={() => navigation.navigate('Product')}
            />
          </View>
        </View>
        <Tab.Navigator
          initialRouteName={route?.tabRender || 'Shipping'}
          swipeEnabled="true"
          style={{backgroundColor: '#fcebc6', width: '100%'}}
          tabBarOptions={{
            activeTintColor: '#e77733',
            inactiveTintColor: 'rgb(157,149,130)',
            labelStyle: {
              fontSize: 15,
              fontWeight: '400',
              fontStyle: 'normal',
              textTransform: 'none',
            },
            scrollEnabled: true,
            tabStyle: {
              width: 110,
            },
            style: {
              backgroundColor: '#fcebc6',
            },
            indicatorStyle: {
              backgroundColor: '#e77733',
            },
          }}>
          <Tab.Screen name="Pending">
            {() => (
              <Pending
                pendingOrderList={listOrders['placed-order']}
                navigation={navigation}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Picking">
            {() => (
              <Picking
                pickingOrderList={listOrders.handling}
                navigation={navigation}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Shipping">
            {() => (
              <Shipping
                shippingOrderList={listOrders.shipped}
                navigation={navigation}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Completed">
            {() => (
              <Completed
                completedOrderList={listOrders.deliveried}
                navigation={navigation}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Rating">
            {() => (
              <Rating
                ratingOrderList={listOrders.rating}
                navigation={navigation}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Cancelled">
            {() => (
              <Cancelled
                cancelledOrderList={listOrders.cancelled}
                navigation={navigation}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </SafeAreaView>
    </Fragment>
  ) : null;
};

OrderScreen.propTypes = {};

export default OrderScreen;
