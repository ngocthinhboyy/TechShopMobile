import React from 'react';
import CartStack from '../pages/Cart/CartStack';
import HomeScreen from '../pages/Home/HomeScreen';
import OrderStack from '../pages/Order/OrderStack';
import ProductScreen from '../pages/Product/ProductScreen';
import UserScreen from '../pages/User/UserScreen';
import Tab from './stack-navigator/Tab';
import { Icon } from 'react-native-elements';

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator 

        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconType = "";
            let iconColor = "";

            if (route.name === 'Home') {
                iconName = 'home';
                iconColor = focused ? '#e77733' : 'black';
            }
            else if(route.name == "Product") {
                iconName = 'text-search';
                iconType = 'material-community'
                iconColor = focused ? '#e77733' : 'black';
            }
            else if(route.name == "Cart") {
                iconName = 'shopping-cart';
                iconColor = focused ? '#e77733' : 'black';
            }
            else if(route.name == "Order") {
                iconName = 'receipt';
                iconColor = focused ? '#e77733' : 'black';
            }
            else if(route.name == "Me") {
                iconName = 'person';
                iconColor = focused ? '#e77733' : 'black';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} type= {iconType} color={iconColor} size={26}/>
            },
        })}

      tabBarOptions={{
        labelStyle:{
          fontWeight: '100',
          fontSize: 13
        },
        style: {
          backgroundColor: '#fcebc6',
      },
        activeTintColor: '#e77733',
        inactiveTintColor: 'black',
      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        //   options={{title: 'Home'}}
        />
        <Tab.Screen
          name="Product"
          component={ProductScreen}
       //   options={{title: 'Product'}}
        />
        <Tab.Screen
          name="Cart"
       //   options={{title: 'Cart'}}
          component={CartStack}
        />
        <Tab.Screen
          name="Order"
      //    options={{title: 'Order'}}
          component={OrderStack}
        />
        <Tab.Screen
          name="Me"
          component={UserScreen}
      //    options={{title: 'Me'}}
        />
      </Tab.Navigator>
  );
};

TabNavigator.propTypes = {};

export default TabNavigator;
