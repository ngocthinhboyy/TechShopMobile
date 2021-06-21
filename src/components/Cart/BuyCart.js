import React from 'react';
import { View,Text } from 'react-native';
import {Icon, Button} from 'react-native-elements';

const BuyCart = ({totalPrice, navigation}) => {

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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
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
            title="Place Order"
            titleStyle={{fontSize: 14, fontWeight: '400'}}
            
            buttonStyle={{
              height: 35,
              width: 110,
              borderRadius: 5,
              backgroundColor: '#e77733',
              height: 35,
            }}
          />
        </View>
        </View>
    );
};

export default BuyCart;