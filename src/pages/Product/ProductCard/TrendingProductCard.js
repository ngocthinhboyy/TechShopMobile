import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const TrendingProductCard = ({product, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {productId: product.productId})
      }>
      <View
        style={{
          backgroundColor: '#fcebc6',
          alignItems: 'center',
          width: 150,
          height: 180,
          padding: 15,
          borderRadius: 15,
        }}>
        <Image
          source={product.productImage}
          style={{width: 110, height: 110, borderRadius: 10}}
        />
        <Text
          style={{color: 'black', fontSize: 15, fontWeight: '300', margin: 4}}>
          {product.productName}
        </Text>
        <Text style={{color: 'black', fontSize: 13, fontWeight: '200'}}>
          {product.productPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingProductCard;
