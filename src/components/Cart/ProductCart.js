import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {CartContext} from '../../context/cartContext';

const ProductCart = ({product, navigation}) => {
  const {removeFromCart, updateQuantity} = useContext(CartContext);
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
      style={{backgroundColor: '#fcebc6', width: '90%', marginVertical: 20}}>
      <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: product.productImage}}
          style={{width: 90, height: 90, marginRight: 20}}
        />
        <View style={{width: '47%'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}} numberOfLines={1}>
            {product.productName}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 15, fontWeight: '300', color: '#e77733'}}>
              {handlePrice(product.productPrice)}
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
          <View style={{width: '75%'}}>
            <View
              style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 28,
                backgroundColor: '#fcf6e8',
                marginVertical: 7,
                borderRadius: 5,
              }}>
              <TouchableOpacity
                style={{
                  width: '30%',
                  backgroundColor: '#fcf6e8',
                  height: '60%',
                  justifyContent: 'center',
                  borderRightWidth: 1,
                }}
                onPress={() => {
                  if (parseInt(product.quantity) === 1) return;
                  updateQuantity({
                    id: product.productId,
                    quantity: product.quantity - 1,
                  });
                }}>
                <Icon name="remove" type="material" color="#272622" size={13} />
              </TouchableOpacity>
              <View
                style={{
                  width: '40%',
                  backgroundColor: '#fcf6e8',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 13, color: '#272622'}}>
                  {product.quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: '30%',
                  justifyContent: 'center',
                  backgroundColor: '#fcf6e8',
                  height: '60%',
                  borderLeftWidth: 1,
                }}
                onPress={() =>
                  updateQuantity({
                    id: product.productId,
                    quantity: product.quantity + 1,
                  })
                }>
                <Icon name="add" type="material" color="#272622" size={13} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 85,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductDetail', {
                productId: product.productId,
              });
            }}>
            <Text
              style={{
                color: 'rgb(0, 153, 0)',
                fontWeight: '300',
                fontSize: 12,
                marginBottom: 5,
              }}>
              See more details
            </Text>
          </TouchableOpacity>
          <Button
            icon={
              <Icon
                name="trash-outline"
                type="ionicon"
                size={18}
                color="white"
              />
            }
            buttonStyle={{
              height: 31,
              width: 33,
              borderRadius: 5,
              backgroundColor: '#e77733',
              height: 35,
            }}
            onPress={() => removeFromCart(product.productId)}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCart;
