import React, {Fragment, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import HeaderProductDetail from './HeaderProductDetail';
import ProductImageCarousel from './ProductImageCarousel';
import {Icon, Button} from 'react-native-elements';

const ProductDetail = ({navigation}) => {
  const [count, setCount] = useState(1);
  const product = {
    productID: 1,
    categoryID: 1,
    brandID: 2,
    categoryName: 'Macbook',
    brandName: 'Apple',
    productRate: 4.5,
    productName: 'Macbook Pro M1 256GB 13.3-inch (Space Gray)',
    productPrice: 4000000,
    shortDescrip:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam',
    longDescrip:
      "[{'header': 'The power to bring your creations to life','content': 'The powerful combination of an Intel® Core™ processor, ample memory and storage make your creative vision seamlessly come to life faster than ever before.'},{'header': 'Thoughtfully designed','content': 'Sometimes bigger is better. Watch your creations come to life in accurate, vibrant color on this massive high definition, micro-edge display.'},{'header': 'Privacy for your peace of mind','content': 'Keep it confidential with an unhackable camera shutter and dedicated microphone mute button.'}]",
    stock: 50,
    warranty: 2,
    purchased: 23,
    specs:
      "[{'tag': 'Color','content': 'Rose Gold'},{'tag': 'Brightness','content': '300 nits'},{'tag': 'Display resolution','content': '24'},{'tag': 'Signal input connectors','content': '1 HDMI 2.0 (with HDCP support); 1 DisplayPort™ 1.4 (with HDCP support)'},{'tag': 'Ports','content': '1 analog and digital audio-out; 3 USB 3.0 (1 upstream, 2 downstream)'},{'tag': 'Dimensions (W X D X H)','content': '25.98 x13.07 x 18.62 in Without stand'},{'tag': 'Weight','content': '15.8 lb'},{'tag': 'Display viewing angle','content': '160° vertical; 170° horizontal'},{'tag': 'Display type','content': 'LED backlight'}]",
    stockStatus: 'in-stock',
    shortTech:
      "['Chip: S5 with 64-bit dual-core processor','Retina Display: LTPO OLED (1000 nits)','Capacity: 32GB','Battery Life: up to 18 hours','Water resistant: 50 meters','Color: Space Gray, Gold, Silver']",
    totalReviews: 10,
  };
  const convertStringToObject = specsInfo => {
    var specifications = specsInfo.replace(/'/g, '"');
    specifications = JSON.parse(specifications);
    return specifications;
  };
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
  let price = handlePrice(product.productPrice);
  let specificationsInfo = convertStringToObject(product.specs);
  let longDescription = convertStringToObject(product.longDescrip);
  let shortTech = convertStringToObject(product.shortTech);
  //[{tag: , content},...]

  const renderShortTech = productShortTech => {
    var shortTech = productShortTech.replace(/'/g, '"');
    shortTech = JSON.parse(shortTech);
    return shortTech.map((item, index) => (
      <View key={index} style={{marginVertical: 8, flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          reverse
          name='ellipse-sharp'
          type='ionicon'
          size={0.2}
          color='black'
        />
        <Text style={{fontSize: 14, fontWeight: '300', marginLeft: 20}}>
        {item}
         </Text>
      </View>
    ));
  };

  const renderDescription = productDescription => {
    var description = productDescription.replace(/'/g, '"');
    description = JSON.parse(description);
    return description.map((item, index) => (<View key={index}>
      <Text style={{fontSize: 16, fontWeight: '400'}}>{item.header}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '100',
          marginLeft: 30,
          marginTop: 5,
          marginBottom: 15,
          width: '90%',
          textAlign: 'justify',
        }}>
        {item.content}
      </Text>
    </View>));
  };
  const renderSpecifications = productSpecification => {
    var specifications = productSpecification.replace(/'/g, '"');
    specifications = JSON.parse(specifications);
    return specifications.map((item, index) => {
      if(index%2 === 0) {
        return (
          <View key={index} style={{flexDirection: 'row', width: '95%', padding: 10, backgroundColor: '#fcebc6', borderRadius: 10}}>
            <Text style={{fontSize: 14 , fontWeight: '400'}}>
              {item.tag}:  <Text style={{fontSize: 14, fontWeight: '200', color:'black'}}>{item.content}</Text>
            </Text>
          </View>
        )
      }
      else{
        return((
          <View key={index} style={{flexDirection: 'row', width: '95%', padding: 10, borderRadius: 10}}>
            <Text style={{fontSize: 14 , fontWeight: '400'}}>
              {item.tag}:  <Text style={{fontSize: 14, fontWeight: '200', color:'black'}}>{item.content}</Text>
            </Text>
          </View>
        ))
      }
    });
  };
  return (
    // <View
    //   style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}>
    //   <Text style={{color: 'blue', fontSize: 30}}>Product Detail</Text>
    //   <Button
    //     title="Back"
    //     onPress={() => navigation.goBack()}
    //   />
    // </View>
    <Fragment>
      <SafeAreaView style={styles.topContainer}></SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerNavbar}>
          <HeaderProductDetail navigation={navigation} />
        </View>
        <View style={styles.homeScreenContent}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <ProductImageCarousel />
            <View style={{alignItems: 'flex-start', width: '90%'}}>
              <Text style={{fontSize: 25, fontWeight: '500'}}>
                {product.productName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '91%',
              }}>
              <View>
                <View
                  style={{marginTop: 10, marginLeft: 3, flexDirection: 'row'}}>
                  <Text style={{fontStyle: 'italic'}}>Brand: </Text>
                  <Text style={{color: '#e77733'}}>{product.brandName}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Icon name="star" color="#e77733" size={20} />
                  <Icon name="star" color="#e77733" size={20} />
                  <Icon name="star" color="#e77733" size={20} />
                  <Icon name="star" color="#e77733" size={20} />
                  <Icon name="star" color="gray" size={20} />
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text style={{fontSize: 20, fontWeight: '300'}}>{price}</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '300',
                      textDecorationLine: 'underline',
                    }}>
                    đ
                  </Text>
                </View>
              </View>
              <View style={{width: '35%'}}>
                <View style={{width: '85%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 30, backgroundColor: '#f7deab', marginVertical: 15, borderRadius: 10}}>
                  <TouchableOpacity onPress={() => setCount(count - 1)} style={{width: '30%', backgroundColor: '#f7deab', height: '60%', justifyContent: 'center', borderRightWidth: 1}}>
                  <Icon
                            name='remove'
                            type='material'
                            color='#272622'
                            size={15}
                          />
                  </TouchableOpacity>
                  <View style={{width: '40%', backgroundColor: '#f7deab', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize : 15, color: '#272622'}}>{count}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setCount(count + 1)} style={{width: '30%', justifyContent:'center', backgroundColor: '#f7deab', height: '60%', borderLeftWidth: 1}}>
                      <Icon
                            name='add'
                            type='material'
                            color='#272622'
                            size={15}
                          />
                  </TouchableOpacity>
                </View>
                <Button
                  icon={
                    <Icon name="add-shopping-cart" size={20} color="white" />
                  }
                  title="  Add to Cart"
                  titleStyle={{fontSize: 15, fontWeight: '300'}}
                  buttonStyle={{backgroundColor: '#e77733', marginRight: 20}}
                />
              </View>
            </View>
            <View
              style={{
                width: '50%',
                height: 1,
                backgroundColor: '#a6a7a6',
                marginTop: 30,
              }}></View>
            <View
              style={{
                width: '90%',
                marginTop: 15,
              }}>
              <Text style={{color: '#e77733', fontSize: 20, marginBottom: 10}}>
                General Information
              </Text>
              <View style={{marginLeft: 20}}>
                {renderShortTech(product.shortTech)}
              </View>
            </View>
            <View
              style={{
                width: '50%',
                height: 1,
                backgroundColor: '#a6a7a6',
                marginTop: 30,
              }}></View>
            <View
              style={{
                width: '90%',
                marginTop: 15,
              }}>
              <Text style={{color: '#e77733', fontSize: 20, marginBottom: 10}}>
                Description
              </Text>
              <View style={{marginLeft: 20, width: '90%'}}>
                {renderDescription(product.longDescrip)}
              </View>
            </View>
            <View
              style={{
                width: '50%',
                height: 1,
                backgroundColor: '#a6a7a6',
                marginTop: 30,
              }}></View>
            <View
              style={{
                width: '90%',
                marginTop: 25,
              }}>
              <Text style={{color: '#e77733', fontSize: 20, marginBottom: 10}}>
                General Specifications
              </Text>
              <View
                style={{
                  marginTop: 15,
                  paddingVertical: 15,
                  paddingLeft: 20,
                  backgroundColor: '#f7deab',
                  borderRadius: 20,
                  width: '100%',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 10,
                }}>
                {renderSpecifications(product.specs)}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  headerNavbar: {
    flex: 0.7,
    backgroundColor: '#fcebc6',
    alignItems: 'center',
  },
  homeScreenContent: {
    flex: 9.3,
    backgroundColor: '#fcebc6',
  },
  scrollView: {
    backgroundColor: '#fcebc6',
    alignItems: 'center',
  },
  topContainer: {
    flex: 0,
    backgroundColor: '#fcebc6',
  },
  container: {
    flex: 1,
    backgroundColor: '#fcebc6',
  },
});

ProductDetail.propTypes = {};

export default ProductDetail;
