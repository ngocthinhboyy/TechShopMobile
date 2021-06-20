import React from 'react';
import {Text, View} from 'react-native';
import TopPurchasedProductCard from '../../Product/ProductCard/TopPurchasedProductCard';
import {TopPurchasedProductListData} from '../../../Data/topPurchasedProductListData';

const TopPurchasedProduct = ({navigation}) => {
  const data = TopPurchasedProductListData;

  const renderProductCard = productList => {
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
            <TopPurchasedProductCard
              product={productList[i]}
              navigation={navigation}
            />
            <TopPurchasedProductCard
              product={productList[++i]}
              navigation={navigation}
            />
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
              <TopPurchasedProductCard
                product={productList[i]}
                navigation={navigation}
              />
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
              <TopPurchasedProductCard
                product={productList[i]}
                navigation={navigation}
              />
              <TopPurchasedProductCard
                product={productList[++i]}
                navigation={navigation}
              />
            </View>,
          );
        }
      }
    }
    return <View>{renderResult}</View>;
  };
  return (
    <View style={{backgroundColor: '#fcebc6', width: '90%', marginTop: 20}}>
      <Text style={{color: '#e77733', fontSize: 20}}>
        Top Purchased Products
      </Text>
      <View
        style={{
          backgroundColor: '#fcebc6',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {renderProductCard(data)}
      </View>
    </View>
  );
};

export default TopPurchasedProduct;
