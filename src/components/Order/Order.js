import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const Order = ({navigation, order}) => {
 
  const handlePrice = price => {
    if (price !== undefined) {
      var priceFormat = '';
      while (price > 1000) {
        if (price % 1000 !== 0) {
          priceFormat = '.' + (price % 1000) + priceFormat;
        } else {
          priceFormat = '.000' + priceFormat;
        }
        price = Math.floor(price / 1000);
      }
      return price.toString().concat(priceFormat);
    }
    return '';
  };

  const renderButtonForOrder = order => {
    switch (order.statusInvoice) {
      case 'PENDING':
        return (
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
              You can cancel order before picking
            </Text>
            <Button
              title="Cancel Order"
              titleStyle={{fontSize: 12, fontWeight: '400'}}
              
              buttonStyle={{
                height: 35,
                width: 100,
                borderRadius: 5,
                backgroundColor: '#e77733',
                height: 35,
              }}
            />
          </View>
        );
      case 'PICKING':
        return (
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
              Contact us to change order
            </Text>
            <Button
              title="Contact Us"
              titleStyle={{fontSize: 12, fontWeight: '400'}}
              buttonStyle={{
                backgroundColor: '#e77733',
                height: 35,
                width: 90,
                borderRadius: 5,
              }}
            />
          </View>
        );
      case 'SHIPPING':
        return (
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
              Confirm if you received
            </Text>
            <Button
              title="Order Received"
              titleStyle={{fontSize: 12, fontWeight: '400'}}
              buttonStyle={{
                backgroundColor: '#e77733',
                height: 35,
                width: 110,
                borderRadius: 5,
              }}
            />
          </View>
        );
      case 'RATING':
        return (
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
              Rating your experience
            </Text>
            <Button
              title="Rating"
              titleStyle={{fontSize: 12, fontWeight: '400'}}
              buttonStyle={{
                backgroundColor: '#e77733',
                height: 35,
                width: 70,
                borderRadius: 5,
              }}
            />
          </View>
        );
      case 'COMPLETED':
        return (
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
              Rating your experience
            </Text>
            <Button
              title="Remove"
              titleStyle={{fontSize: 12, fontWeight: '400'}}
              buttonStyle={{
                backgroundColor: '#e77733',
                height: 35,
                width: 80,
                borderRadius: 5,
              }}
            />
          </View>
        );
      case 'CANCELLED':
        return (
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{fontSize: 12, fontWeight: '100', width: '60%'}}>
              Buy order again
            </Text>
            <Button
              title="Buy Again"
              titleStyle={{fontSize: 12, fontWeight: '400'}}
              buttonStyle={{
                backgroundColor: '#e77733',
                height: 35,
                width: 80,
                borderRadius: 5,
              }}
            />
          </View>
        );
      default:
        break;
    }
  };
  return (
    <View style={{backgroundColor: '#fcf6e8', marginVertical: 10}}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fcf6e8',
          paddingVertical: 12,
          alignItems: 'center',
          borderBottomWidth: 0.2,
          borderBottomColor: '#a19791',
        }}>
        <View style={{width: '90%', alignItems: 'flex-end'}}>
          <Text
            style={{
              color: 'rgb(0, 153, 0)',
              fontWeight: '300',
              fontSize: 12,
              marginBottom: 5,
            }}>
            {order.statusProcess}
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: '#fcf6e8',
            flexDirection: 'row',
          }}>
          <Image
            source={order.productImage}
            style={{width: 55, height: 55, marginRight: 10}}
          />
          <View style={{width: '83%'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              {order.productName}
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <Text style={{fontSize: 12, fontWeight: '300'}}>
                Color: Space Gray
              </Text>
              <Text style={{fontSize: 12, fontWeight: '100'}}>
                x{order.quantity}
              </Text>
            </View>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 14, fontWeight: '300', color: '#e77733'}}>
                  {handlePrice(order.totalPrice)}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '300',
                    textDecorationLine: 'underline',
                    color: '#e77733',
                  }}>
                  đ
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          borderBottomWidth: 0.2,
          borderBottomColor: '#a19791',
          alignItems: 'center',
          paddingVertical: 6,
          backgroundColor: '#fcf6e8',
        }}
        onPress={() =>
          navigation.navigate('OrderDetail', {invoiceID: order.invoiceID})
        }>
        <Text style={{fontSize: 11, fontWeight: '100'}}>
          View more products...
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          borderBottomWidth: 0.2,
          borderBottomColor: '#a19791',
          paddingVertical: 12,
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 13, fontWeight: '100'}}>
            {order.countItems}
            {order.countItems === 1 ? ' item' : ' items'}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="monetization-on"
              type="material"
              size={23}
              color="#e77733"
              style={{marginHorizontal: 5}}
            />
            <Text style={{fontSize: 14}}>Total: </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#e77733',
              }}>
              {handlePrice(order.totalCost)}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '300',
                textDecorationLine: 'underline',
                color: '#e77733',
              }}>
              đ
            </Text>
          </View>
        </View>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        {renderButtonForOrder(order)}
      </View>
    </View>
  );
};

export default Order;
