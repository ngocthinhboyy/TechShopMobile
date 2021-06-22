import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import ProductCart from './ProductCart';

const ProductListCard = ({productCartList, navigation}) => {
    
  const handlePrice = price => {
    if (price !== undefined) {
      var priceFormat = '';
      while (price > 1000) {
        if (price % 1000 !== 0) {
          priceFormat = '.' + (price % 1000) + priceFormat;
        } else {
          priceFormat = '.000' + priceFormat;
        }
        price = Math.floor(price / 1000);
      }
      return price.toString().concat(priceFormat);
    }
    return '';
  };
  const renderProductCart = (productList) => {
      return productList.map( (product, index) => {
          return (<View key={index} style={{width: '100%', alignItems: 'center'}}>
          <ProductCart product={product} navigation={navigation}/>
          {index !== productList.length -1  ?
          <View style={{width: '50%', height: 0.5, backgroundColor: '#a19791', marginVertical: 10}}>
          </View> : <View></View>}
     </View>)
      })
  }
  const renderCountProduct = productList => {
    if(productList.length === 0) {
        return(
          <View style={{width: '90%',justifyContent:'center', paddingHorizontal:10, marginTop: 50, alignItems:'center'}}>
                  <Icon
                  name="shopping-bag"
                  type="material"
                  size={130}
                  color= '#e77733'
                  />
                <View style={{flexDirection:'row', alignItems: 'center', marginTop: 30}}>
                    <Icon
                    name="search-outline"
                    type="ionicon"
                    size={30}
                    color= '#e77733'
                    />
                    <Text style={{fontSize: 18, fontWeight:'300', fontStyle:'italic', marginLeft: 5, color: '#e77733'}}>You have no items in your shopping cart</Text>
                </View>
          
        </View>
        )
    }
    else{
      return(
        <View style={{width: '90%', paddingHorizontal:10, marginTop: 30}}>
        <Text style={{fontSize: 17, color:'#e77733', fontWeight:'600'}}>All ({productList.length})</Text>
      </View>
      )
    }
  }
  return (
    <View style={{width: '100%', alignItems:'center'}}>
      {renderCountProduct(productCartList)}
        {renderProductCart(productCartList)}
    </View>
  );
};

export default ProductListCard;
