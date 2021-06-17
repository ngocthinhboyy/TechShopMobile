import { reduce } from 'lodash';
import React from 'react';
import {Button, Text, View} from 'react-native';
import ProductCard from './ProductCard/ProductCard';

const ProductList = ({navigation}) => {
  const data = [
    {
        productImage: require("../../assets/img/pic3.jpg"),
        productName: 'Macbook Pro',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/pic1.jpg"),
        productName: 'Audio System',
        productPrice: '2.000.000đ'
    },
    {
        productImage: require("../../assets/img/pic6.jpeg"),
        productName: 'Iphone 12 Pro',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer.jpeg"),
        productName: 'Iphone 8 plus',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Airpod Pro',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Airpod 2',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Ipad Pro',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Macbook Air',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Airpod 2',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Ipad Pro',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Macbook Air',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Airpod 2',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Ipad Pro',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Macbook Air',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Airpod 2',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Ipad Pro',
        productPrice: '60.000.000đ'
    },
    {
        productImage: require("../../assets/img/footer1.jpeg"),
        productName: 'Macbook Air',
        productPrice: '60.000.000đ'
    },
];
const renderProductCard = (productList) => {
  let renderResult = [];
  const lengthProductList = productList.length;
  if(lengthProductList % 2 === 0){
      for (var i=0; i < lengthProductList; i++) {
          renderResult.push(
              <View key={i} style={{backgroundColor: '#fcebc6', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <ProductCard product={productList[i]} navigation={navigation}/>
                  <ProductCard product={productList[++i]} navigation={navigation}/>
              </View>);
      }
  }
  else{
      for (var i=0; i < lengthProductList; i++) {
          if(i=== lengthProductList - 1){
              renderResult.push(
                  <View key={i} style={{backgroundColor: '#fcebc6', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <ProductCard product={productList[i]} navigation={navigation}/>
                  </View>);
          }
          else{
              renderResult.push(
                  <View key={i} style={{backgroundColor: '#fcebc6', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <ProductCard product={productList[i]} navigation={navigation}/>
                      <ProductCard product={productList[++i]} navigation={navigation}/>
                  </View>);
          }
      }
  };
  return (<View>
              {renderResult}
          </View>);
}
  return (
    <View style={{backgroundColor: '#fcebc6', width:'100%'}}>
            <View style={{backgroundColor: '#fcebc6', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            {renderProductCard(data)}
            </View>
      </View>
  );
};

ProductList.propTypes = {};

export default ProductList;
