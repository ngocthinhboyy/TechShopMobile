import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ProductCard from './ProductCard/ProductCard';
import { getAllProducts } from "../../utilities/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductList = ({navigation, category}) => {
  const stateProducts = useSelector((state) => state.product.products);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      await dispatch(getAllProducts());
    }
    if (!stateProducts.allProducts) {
      fetchProduct();
    } else {
      setLoading(false);
    }
  }, [dispatch, stateProducts]);

  useEffect(() => {
    if (!stateProducts.allProducts) {
      return;
    }
    let baseProducts;
    baseProducts = stateProducts.filterProducts[category];
    setProducts(baseProducts);
  }, [stateProducts, category]);


  const renderProductCard = (productList) => {
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
        {products && renderProductCard(products, category)}
      </View>
    </View>
  );
};

ProductList.propTypes = {};

export default ProductList;
