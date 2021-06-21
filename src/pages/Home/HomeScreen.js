import React from 'react';
import {Fragment} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import ImageCarousel from '../../components/Home/ImageCarousel';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import TrendingProduct from '../Home/TrendingProduct/TrendingProduct';
import CategoryList from './Category/CategoryList';
import TopPurchasedProduct from '../Home/TopPurchasedProduct/TopPurchasedProduct';

const HomeScreen = ({navigation}) => {
  return (
    <Fragment>
      <SafeAreaView style={styles.topContainer}></SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerNavbar}>
          <HeaderNavbar />
        </View>
        <View style={styles.homeScreenContent}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <ImageCarousel />
            <CategoryList navigation={navigation} />
            <TrendingProduct navigation={navigation} />
            <TopPurchasedProduct navigation={navigation} />
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

export default HomeScreen;
