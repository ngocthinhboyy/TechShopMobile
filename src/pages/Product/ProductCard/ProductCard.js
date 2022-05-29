import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import noimage from '../../../assets/img/noimage.png';
import parseImages from '../../../helpers/parseImages';
import handlePrice from '../../../helpers/formatPrice';

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
          resizeMode: 'contain',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View style={{alignItems: 'center', backgroundColor: '#fef5e2', width: '100%', borderBottomLeftRadius: 15,borderBottomRightRadius: 15, paddingBottom: 20}}>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '300',
            marginTop: 20,
            textAlign:'center',
            paddingHorizontal: 5
          }}>
          {product.name}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '200',
            marginTop: 10,
          }}>
          {handlePrice(product.price)} đ
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '48%',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 15,
    marginLeft: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default ProductCard;
