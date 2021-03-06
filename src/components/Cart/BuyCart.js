import React, {useContext, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {CartContext} from '../../context/cartContext';
import OrderApi from '../../api/orderApi';
import { useDispatch } from 'react-redux';
import {getAllUserOrders} from '../../utilities/slices/userSlice';

const BuyCart = ({totalPrice, navigation}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {cartData, clearCart} = useContext(CartContext);
  const dispatch = useDispatch()

  const order = async () => {
    if (isDisabled) return;
    setIsDisabled(true);

    let orderInfo = [];
    for (let product of cartData) {
      let tempProduct = {
        id: product.productId,
        quantity: product.quantity,
      };
      orderInfo.push(tempProduct);
    }
    let data = {
      detailedInvoices: orderInfo,
      shippingInfo: {
        fullname: 'Phạm Ngọc Thịnh',
        phone: '0904588091',
        address: '207, Đường C25, Phường Tăng Nhơn Phú B',
      },
    };

    const placeOrder = async (data) => {
      return OrderApi.placeOrder(data)
      .then((res) => {
          clearCart();
          setIsDisabled(false);
          dispatch(getAllUserOrders());
        })
        .catch((err) => {
          setIsDisabled(false);
        });
      };
      await placeOrder(data);
      navigation.navigate('Order', { tabRender: 'Pending' });
    };

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
          onPress={order}
        />
      </View>
    </View>
  );
};

export default BuyCart;
