import React, {Fragment} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text} from 'react-native';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

const ProductScreen = ({navigation}) => {
  return (
    <Fragment>
    <SafeAreaView style={styles.topContainer}></SafeAreaView>
    <SafeAreaView style={styles.container}>
        <View style={styles.headerNavbar}>
            <HeaderNavbar/>
        </View>
        <View style={styles.homeScreenContent}>
            <View style={{flex: 0.2}}>
              <ScrollView contentContainerStyle={styles.scrollViewCategory}>
                  <Text>aaa</Text>
              </ScrollView>
            </View>
            <View style={{flex: 0.8}}>
              <ScrollView contentContainerStyle={styles.scrollViewProduct}>
                  <Text>aaa</Text>
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
    backgroundColor: '#fcebc6'
  },
  headerNavbar: {
      flex: 0.7,
      backgroundColor: '#fcebc6',
      alignItems:'center'
  },
  homeScreenContent: {
      flex: 9.3,
      backgroundColor:'#fcebc6',
      flexDirection: 'row'
  },
  scrollViewCategory: {
      backgroundColor:'#fcf6e8',
      height: 2000
  },
  scrollViewProduct: {
    backgroundColor:'white'
},
  container: {
    flex: 1,
    backgroundColor: '#fcebc6'
  }
});

ProductScreen.propTypes = {};

export default ProductScreen;
