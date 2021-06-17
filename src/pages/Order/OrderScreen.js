import React, {Fragment} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import Login from '../User/Login';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pending from './OrderTabNavigate/Pending';
import Shipping from './OrderTabNavigate/Shipping';
import Picking from './OrderTabNavigate/Picking';
import Rating from './OrderTabNavigate/Rating';
import Completed from './OrderTabNavigate/Completed';
import Cancelled from './OrderTabNavigate/Cancelled';


import {Icon} from 'react-native-elements';
const Tab = createMaterialTopTabNavigator();

const OrderScreen = ({navigation}) => {
  return (
    // <View
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100%',
    //   }}>
    //   <Text style={{color: 'blue', fontSize: 30}}>Your order</Text>
    // </View>
    <Fragment>
    <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>  
    <SafeAreaView style={{flex: 1, backgroundColor: '#fcebc6', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fcebc6',
      alignItems:'center',
      marginBottom: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#fcebc6'}}>
                <Icon
                name='keyboard-backspace'
                type='material'
                color='black'
                size= {35}
                onPress={()=> navigation.goBack()}
                />
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '300'}}>My Orders</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#fcebc6', width: '20%'}}>
          <Icon
                    type= 'ionicon'
                    name='home-outline'
                    color='black'
                    onPress={()=> navigation.navigate('Home')}
                    />
                <Icon
                    type= 'ionicon'
                    name='search-outline'
                    color='black' 
                    onPress={()=> navigation.navigate('Product')}
                    />
          </View>
        </View>
      <Tab.Navigator swipeEnabled = 'true' style={{backgroundColor: '#fcebc6', width: '100%'}} tabBarOptions={{
        labelStyle:{
          fontSize: 13,
          fontWeight: '400',
          fontStyle: 'normal',
          textTransform: 'none',
        }
      }}>
        <Tab.Screen name="Pending" component={Pending} />
        <Tab.Screen name="Picking" component={Picking} />
        <Tab.Screen name="Shipping" component={Shipping} />
        <Tab.Screen name="Rating" component={Rating} />
        <Tab.Screen name="Completed" component={Completed} />
        <Tab.Screen name="Cancelled" component={Cancelled} />
      </Tab.Navigator>
    </SafeAreaView>
    </Fragment>
  );
};

OrderScreen.propTypes = {};

export default OrderScreen;
