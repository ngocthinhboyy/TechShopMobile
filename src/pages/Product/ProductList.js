import React from 'react';
import {Button, Text, View} from 'react-native';

const ProductList = ({navigation}) => {
  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}>
      <Text style={{color: 'blue', fontSize: 30}}>Product List</Text>
      <Button
        title="Go to A Detailed Product"
        onPress={() => navigation.navigate('ProductDetail')}
      />
    </View>
  );
};

ProductList.propTypes = {};

export default ProductList;
