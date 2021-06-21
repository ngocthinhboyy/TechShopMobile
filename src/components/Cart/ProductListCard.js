import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import ProductCart from './ProductCart';

const ProductListCard = ({productCartList, navigation}) => {
    
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
  const renderProductCart = (productList) => {
      return productList.map( (product, index) => {
          return (<View key={index} style={{width: '100%', alignItems: 'center'}}>
          <ProductCart product={product}/>
          {index !== productList.length -1  ?
          <View style={{width: '50%', height: 0.5, backgroundColor: '#a19791', marginVertical: 10}}>
          </View> : <View></View>}
     </View>)
      })
  }
  return (
    <View style={{width: '100%'}}>
        {renderProductCart(productCartList)}
    </View>
  );
};

export default ProductListCard;
