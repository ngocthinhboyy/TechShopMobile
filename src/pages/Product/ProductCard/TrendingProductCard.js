import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import parseImages from '../../../helpers/parseImages';
import handlePrice from '../../../helpers/formatPrice';

const TrendingProductCard = ({product, navigation, onPressTouch}) => {
  const images = parseImages(product.images)

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetail', {productId: product.id});
        onPressTouch();
      }
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
          source={{uri: images[0]}}
          style={{width: 110, height: 110, borderRadius: 10}}
        />
        <Text numberOfLines={1}
          style={{color: 'black', fontSize: 15, fontWeight: '300', margin: 4}}>
          {product.name}
        </Text>
        <Text style={{color: 'black', fontSize: 13, fontWeight: '200'}}>
          {handlePrice(product.price)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingProductCard;
