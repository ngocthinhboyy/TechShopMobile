import React from 'react';
import {Button, Text, View} from 'react-native';

const ProductDetail = ({navigation}) => {
  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}>
      <Text style={{color: 'blue', fontSize: 30}}>Product Detail</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

ProductDetail.propTypes = {};

export default ProductDetail;
