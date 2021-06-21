import React, {useContext, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {CartContext} from '../../context/cartContext';
import {OrderContext} from '../../context/orderContext';

const BuyCart = ({totalPrice, navigation}) => {
  const placeOrderTimeoutRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const {cartData, clearCart} = useContext(CartContext);
  const {placeOrder} = useContext(OrderContext);
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
  const order = (totalPrice, cartData) => {
    if (isDisabled) return;
    setIsDisabled(true);

    placeOrder({
      order: {
        userID: 3,
        totalCost: totalPrice,
        invoiceDate: '2021-06-08',
        shippingDate: '2021-06-11',
        note: null,
        otherShippingAddress: true,
        statusInvoice: 'PENDING',
        userInvoiceIndex: 'phuongdinh1802@gmail.com0',

        countItems: cartData.length,
        quantity: cartData[0].quantity,
        totalPrice: cartData[0].quantity * cartData[0].productPrice,
        productName: cartData[0].productName,
        statusProcess: 'Waiting to confirm',
        productImage: cartData[0].productImage,
      },
      detail: {
        detailedInvoices: cartData,
        shippingInfo: {
          fullname: 'Phạm Ngọc Thịnh',
          phone: '(+84) 825 494 593',
          address:
            '207, Đường C25, Phường Tăng Nhơn Phú B, Quận 9, TP. Hồ Chí Minh',
        },
        email: null,
        totalPrice: totalPrice,
        note: null,
        statusInvoice: 'PENDING',
        shippingDate: '2021-06-11',
        invoiceDate: '2021-06-08',
      },
    });
    if (placeOrderTimeoutRef.current) {
      clearTimeout(placeOrderTimeoutRef.current);
    }
    placeOrderTimeoutRef.current = setTimeout(() => {
      clearCart();
      setIsDisabled(false);
    }, 1100);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}>
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
          {handlePrice(totalPrice)}
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
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 8,
        }}>
        <Button
          disabled={cartData.length === 0 ? true : false}
          title={!isDisabled ? 'Place Order' : 'Order...'}
          titleStyle={{fontSize: 14, fontWeight: '400'}}
          buttonStyle={{
            height: 35,
            width: 110,
            borderRadius: 5,
            backgroundColor: `${!isDisabled ? '#e77733' : 'rgb(0,153,0)'}`,
            height: 35,
          }}
          onPress={() => order(totalPrice, cartData)}
        />
      </View>
    </View>
  );
};

export default BuyCart;
