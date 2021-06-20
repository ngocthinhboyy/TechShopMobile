import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const OrderDetailShipping = ({order}) => {
  //console.log('status', order.statusInvoice);
  return (
    <View
      style={{backgroundColor: '#fcf6e8', width: '100%', alignItems: 'center'}}>
      <View
        style={{
          width: '90%',
          alignItems: 'center',
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <Icon
          name="local-shipping"
          type="material-outlined"
          color="black"
          size={20}
        />
        <Text style={{fontSize: 14, marginHorizontal: 10}}>
          Shipping Information
        </Text>
      </View>
      <View style={{width: '90%', marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 2,
          }}>
          <Icon name="receipt-long" type="material" color="#ee8241" size={35} />
          <Icon
            name="storefront"
            type="material"
            color={order.statusInvoice === 'PENDING' ? 'black' : '#ee8241'}
            size={35}
          />
          <Icon
            name="local-shipping"
            type="material-outlined"
            color={
              order.statusInvoice === 'PENDING' ||
              order.statusInvoice === 'PICKING'
                ? 'black'
                : '#ee8241'
            }
            size={35}
          />
          {order.statusInvoice === 'CANCELLED' ? (
            <Icon
              name="remove-circle-outline"
              type="material"
              color="red"
              size={35}
            />
          ) : (
            <Icon
              name="check-circle-outline"
              type="material"
              color={
                order.statusInvoice === 'COMPLETED' ||
                order.statusInvoice === 'RATING'
                  ? '#ee8241'
                  : 'black'
              }
              size={35}
            />
          )}
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Icon
            name="ellipse"
            type="ionicon"
            color="#e77733"
            size={20}
            style={{marginLeft: 7}}
          />
          <View
            style={{
              width: 97,
              height: 1,
              backgroundColor: `${
                order.statusInvoice === 'PENDING' ? 'black' : '#e77733'
              }`,
            }}></View>
          <Icon
            name="ellipse"
            type="ionicon"
            color={order.statusInvoice === 'PENDING' ? 'black' : '#e77733'}
            size={20}
          />
          <View
            style={{
              width: 94,
              height: 1,
              backgroundColor: `${
                order.statusInvoice === 'PENDING' ||
                order.statusInvoice === 'PICKING'
                  ? 'black'
                  : '#e77733'
              }`,
            }}></View>
          <Icon
            name="ellipse"
            type="ionicon"
            color={
              order.statusInvoice === 'PENDING' ||
              order.statusInvoice === 'PICKING'
                ? 'black'
                : '#e77733'
            }
            size={20}
          />
          <View
            style={{
              width: 98,
              height: 1,
              backgroundColor:
                order.statusInvoice === 'COMPLETED' ||
                order.statusInvoice === 'CANCELLED' ||
                order.statusInvoice === 'RATING'
                  ? '#e77733'
                  : 'black',
            }}></View>

          {order.statusInvoice === 'CANCELLED' ? (
            <Icon name="ellipse" type="ionicon" color="red" size={20} />
          ) : (
            <Icon
              name="ellipse"
              type="ionicon"
              color={
                order.statusInvoice === 'COMPLETED' ||
                order.statusInvoice === 'RATING'
                  ? '#e77733'
                  : 'black'
              }
              size={20}
            />
          )}
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 5,
            marginLeft: 15,
            color: '#e77733',
          }}>
          Pending
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 5,
            marginLeft: 14,
            color: order.statusInvoice === 'PENDING' ? 'black' : '#e77733',
          }}>
          Picking
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 5,
            color:
              order.statusInvoice === 'PENDING' ||
              order.statusInvoice === 'PICKING'
                ? 'black'
                : '#e77733',
          }}>
          Shipping
        </Text>

        {order.statusInvoice === 'CANCELLED' ? (
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              marginTop: 5,
              marginRight: 10,
              color: 'red',
            }}>
            Cancelled
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              marginTop: 5,
              marginRight: 10,
              color:
                order.statusInvoice === 'COMPLETED' ||
                order.statusInvoice === 'RATING'
                  ? '#e77733'
                  : 'black',
            }}>
            Completed
          </Text>
        )}
      </View>
      <View
        style={{
          width: '90%',
          alignItems: 'center',
          flexDirection: 'row',
          marginVertical: 10,
        }}>
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
      <View
        style={{width: '98%', alignItems: 'flex-start', paddingHorizontal: 47}}>
        <Text style={{fontSize: 13, fontWeight: '200', marginBottom: 7}}>
          {order.shippingInfo.fullname}
        </Text>
        <Text style={{fontSize: 13, fontWeight: '200', marginBottom: 7}}>
          {order.shippingInfo.phone}
        </Text>
        <Text style={{fontSize: 13, fontWeight: '200', marginBottom: 7}}>
          {order.shippingInfo.address}
        </Text>
      </View>
    </View>
  );
};

export default OrderDetailShipping;
