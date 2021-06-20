import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const TopPurchasedProductCard = ({product, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductDetail', {productId: product.productId})
      }>
      <Image
        source={product.productImage}
        style={{
          width: '100%',
          height: 200,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 17,
          fontWeight: '300',
          marginTop: 17,
        }}>
        {product.productName}
      </Text>
      <Text
        style={{color: 'black', fontSize: 14, fontWeight: '200', marginTop: 5}}>
        {product.productPrice}
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
    height: 280,
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderRadius: 20,
  },
});

export default TopPurchasedProductCard;
