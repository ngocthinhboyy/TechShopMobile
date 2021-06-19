import React from 'react';
import {View} from 'react-native';
import ProductCard from './ProductCard/ProductCard';
import {GeneralInfoProductsData} from '../../Data/generalInfoProductsData';

const ProductList = ({navigation, category}) => {
  const productList = [...GeneralInfoProductsData];

  const renderProductCard = (productList, category) => {
    productList = productList.filter(
      product => product.productCategory === category,
    );
    let renderResult = [];
    const lengthProductList = productList.length;
    if (lengthProductList % 2 === 0) {
      for (var i = 0; i < lengthProductList; i++) {
        renderResult.push(
          <View
            key={i}
            style={{
              backgroundColor: '#fcebc6',
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <ProductCard product={productList[i]} navigation={navigation} />
            <ProductCard product={productList[++i]} navigation={navigation} />
          </View>,
        );
      }
    } else {
      for (var i = 0; i < lengthProductList; i++) {
        if (i === lengthProductList - 1) {
          renderResult.push(
            <View
              key={i}
              style={{
                backgroundColor: '#fcebc6',
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <ProductCard product={productList[i]} navigation={navigation} />
            </View>,
          );
        } else {
          renderResult.push(
            <View
              key={i}
              style={{
                backgroundColor: '#fcebc6',
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <ProductCard product={productList[i]} navigation={navigation} />
              <ProductCard product={productList[++i]} navigation={navigation} />
            </View>,
          );
        }
      }
    }
    return <View>{renderResult}</View>;
  };
  return (
    <View style={{backgroundColor: '#fcebc6', width: '100%'}}>
      <View
        style={{
          backgroundColor: '#fcebc6',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {renderProductCard(productList, category)}
      </View>
    </View>
  );
};

ProductList.propTypes = {};

export default ProductList;
