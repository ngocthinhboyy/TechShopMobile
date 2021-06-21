import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const OrderDetailProduct = ({order}) => {

  let countProduct = 0;
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

  const renderOrderProduct = productList => {
    return productList.map((product, index) => {
        return(
            countProduct += product.quantity,
            <View 
            key={index} style={{
                width: '100%',
                backgroundColor: '#fcf6e8',
                alignItems: 'center',
                marginVertical: 10,
                borderBottomWidth: 0.6,
                borderBottomColor: '#a19791'
                }}>
                <View
                style={{
                width: '90%',
                backgroundColor: '#fcf6e8',
                flexDirection: 'row'
                }}>
                <Image
                source={product.productImage}
                style={{width: 55, height: 55, marginRight: 10}}
                />
                <View style={{width: '83%'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    {product.productName}
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
                    x{product.quantity}
                    </Text>
                </View>
                <View style={{width: '100%', alignItems: 'flex-end', marginBottom: 10}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 14, fontWeight: '300', color: '#e77733'}}>
                        {handlePrice(product.totalPrice)}
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
                )
    })
  }

  return (
    <View style={{width: '100%', alignItems: 'center', backgroundColor: '#fcf6e8', marginVertical: 15, paddingVertical: 15}}>
        {renderOrderProduct(order.detailedInvoices)}
        <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 13, fontWeight: '100'}}>{countProduct}{order.countItems === 1 ? " item" : " items"}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon                   
                    name='monetization-on'
                    type='material'
                    size={23}
                    color='#e77733'
                    style={{marginHorizontal:5}}
                />
                <Text style={{fontSize: 14}}>Total: </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '300',
                    color: '#e77733',
                  }}>{handlePrice(order.totalPrice)}</Text>
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
          <View style={{width: '90%', marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Icon                   
                    name='credit-card'
                    type='material'
                    size={23}
                    color='black'
                    style={{marginHorizontal:5}}
                />
                <Text style={{fontSize: 14, marginHorizontal: 10}}>Payment Method</Text>
           </View>
           <View style={{width: '75%', marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 13, fontWeight: '200', marginHorizontal: 11}}>Payment on delivery</Text>
           </View>
           <View style={{width: '90%', marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Icon                   
                    name='calendar-outline'
                    type='ionicon'
                    size={23}
                    color='black'
                    style={{marginHorizontal:5}}
                />
                <Text style={{fontSize: 14, marginHorizontal: 10}}>Details Time</Text>
           </View>
           <View style={{width: '75%', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 13, fontWeight: '200', marginHorizontal: 11}}>Order Date</Text>
                <Text style={{fontSize: 13, fontWeight: '200', marginHorizontal: 11}}>{order.invoiceDate}</Text>
           </View>
           <View style={{width: '75%', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 13, fontWeight: '200', marginHorizontal: 11}}>Shipping Date</Text>
                <Text style={{fontSize: 13, fontWeight: '200', marginHorizontal: 11}}>{order.shippingDate}</Text>
           </View>
    </View>
  );
};

export default OrderDetailProduct;
