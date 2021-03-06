import React, {Fragment, useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text} from 'react-native';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

const ProductScreen = ({navigation, route}) => {
  const [category, setCategory] = useState(() => {
    return route.params !== undefined ? route.params.slug : 'laptop';
  });
  const changeCategory = categoryUrl => {
    if (categoryUrl === category) return;
    else setCategory(categoryUrl);
  };
  useEffect(() => {
    if (route.params === undefined) return;
    setCategory(route.params?.slug);
  }, [route.params?.slug]);
  return (
    <Fragment>
      <SafeAreaView style={styles.topContainer}></SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerNavbar}>
          <HeaderNavbar navigation={navigation}/>
        </View>
        <View style={styles.homeScreenContent}>
          <View style={{flex: 0.25}}>
            <ScrollView contentContainerStyle={styles.scrollViewCategory}>
              <CategoryList
                changeCategory={changeCategory}
                activeCategory={category}
              />
            </ScrollView>
          </View>
          <View style={{flex: 0.75}}>
            <ScrollView contentContainerStyle={styles.scrollViewProduct}>
              <ProductList navigation={navigation} category={category} />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 0,
    backgroundColor: '#fcebc6',
  },
  headerNavbar: {
    flex: 0.7,
    backgroundColor: '#fcebc6',
    alignItems: 'center',
  },
  homeScreenContent: {
    flex: 9.3,
    backgroundColor: '#fcebc6',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollViewCategory: {
    backgroundColor: '#fcebc6',
    //height: 2000,
  },
  scrollViewProduct: {
    backgroundColor: '#fcebc6',
  },
  container: {
    flex: 1,
    backgroundColor: '#fcebc6',
    flexDirection: 'column',
  },
});

ProductScreen.propTypes = {};

export default ProductScreen;
