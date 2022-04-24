import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import noimage from '../../../assets/img/noimage.png';
import parseImages from "../../../helpers/parseImages";

const ProductCard = ({product, navigation}) => {
  const images = parseImages(product.images);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductDetail', {productId: product.id})
      }>
      <Image
        source={{uri: images.length > 0 ? images[0] : noimage}}
        style={{
          width: '100%',
          height: 180,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 14,
          fontWeight: '300',
          marginTop: 20,
        }}>
        {product.name}
      </Text>
      <Text
        style={{color: 'black', fontSize: 11, fontWeight: '200', marginTop: 5}}>
        {product.price}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fef5e2',
    alignItems: 'center',
    width: '48%',
    borderWidth: 0,
    height: 260,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 15,
    marginLeft: 2,
  },
});

export default ProductCard;
