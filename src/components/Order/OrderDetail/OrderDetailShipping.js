import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {OrderStatus} from '../../../utilities/Constant';

const OrderDetailShipping = ({order}) => {
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
          {order.status === OrderStatus.CANCELLED ? (
            <Icon
              name="remove-circle-outline"
              type="material"
              color="red"
              size={35}
            />
          ) : (
            <>
              <Icon
                name="storefront"
                type="material"
                color={
                  order.status === OrderStatus.IN_HANDLING ||
                  order.status === OrderStatus.SHIPPED||
                  order.status === OrderStatus.DELIVERIED
                    ? '#ee8241'
                    : 'black'
                }
                size={35}
              />
              <Icon
                name="local-shipping"
                type="material-outlined"
                color={
                  order.status === OrderStatus.SHIPPED ||
                  order.status === OrderStatus.DELIVERIED
                    ? '#ee8241'
                    : 'black'
                }
                size={35}
              />
              <Icon
                name="check-circle-outline"
                type="material"
                color={
                  order.status === OrderStatus.DELIVERIED ||
                  order.status === 'RATING'
                    ? '#ee8241'
                    : 'black'
                }
                size={35}
              />
            </>
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
          {order.status === OrderStatus.CANCELLED ? (
            <>
              <View
                style={{
                  width: '85%',
                  height: 1,
                  backgroundColor: 'red',
                }}></View>
              <Icon name="ellipse" type="ionicon" color="red" size={20} />
            </>
          ) : (
            <>
              <View
                style={{
                  width: 97,
                  height: 1,
                  backgroundColor: `${
                    order.status === OrderStatus.IN_HANDLING ||
                    order.status === OrderStatus.SHIPPED||
                    order.status === OrderStatus.DELIVERIED
                      ? '#e77733'
                      : 'black'
                  }`,
                }}></View>
              <Icon
                name="ellipse"
                type="ionicon"
                color={
                  order.status === OrderStatus.IN_HANDLING ||
                  order.status === OrderStatus.SHIPPED||
                  order.status === OrderStatus.DELIVERIED
                    ? '#e77733'
                    : 'black'
                }
                size={20}
              />
              <View
                style={{
                  width: 94,
                  height: 1,
                  backgroundColor: `${
                    order.status === OrderStatus.SHIPPED ||
                    order.status === OrderStatus.DELIVERIED
                      ? '#e77733'
                      : 'black'
                  }`,
                }}></View>
              <Icon
                name="ellipse"
                type="ionicon"
                color={
                  order.status === OrderStatus.SHIPPED ||
                  order.status === OrderStatus.DELIVERIED
                    ? '#e77733'
                    : 'black'
                }
                size={20}
              />
              <View
                style={{
                  width: 98,
                  height: 1,
                  backgroundColor:
                    order.status === OrderStatus.DELIVERIED ||
                    order.status === 'RATING'
                      ? '#e77733'
                      : 'black',
                }}></View>

              <Icon
                name="ellipse"
                type="ionicon"
                color={
                  order.status === OrderStatus.DELIVERIED ||
                  order.status === 'RATING'
                    ? '#e77733'
                    : 'black'
                }
                size={20}
              />
            </>
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
        {order.status === OrderStatus.CANCELLED ? (
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
          <>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '300',
                marginTop: 5,
                marginLeft: 14,
                color:
                  order.status === OrderStatus.IN_HANDLING ||
                  order.status === OrderStatus.SHIPPED||
                  order.status === OrderStatus.DELIVERIED
                    ? '#e77733'
                    : 'black',
              }}>
              Picking
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '300',
                marginTop: 5,
                color:
                  order.status === OrderStatus.SHIPPED ||
                  order.status === OrderStatus.DELIVERIED
                    ? '#e77733'
                    : '#000',
              }}>
              Shipping
            </Text>

            <Text
              style={{
                fontSize: 12,
                fontWeight: '300',
                marginTop: 5,
                marginRight: 10,
                color:
                  order.status === OrderStatus.DELIVERIED ||
                  order.status === 'RATING'
                    ? '#e77733'
                    : 'black',
              }}>
              Completed
            </Text>
          </>
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
