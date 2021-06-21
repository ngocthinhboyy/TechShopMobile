import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Category from '../../../components/Home/Category';

const CategoryList = ({navigation}) => {
  return (
    <View style={styles.categoryList}>
      <View style={styles.categoryContainer}>
        <Category category={'phone'} navigation={navigation} />
        <Category category={'headphone'} navigation={navigation} />
        <Category category={'console'} navigation={navigation} />
        <Category category={'laptop'} navigation={navigation} />
      </View>
      <View style={styles.categoryContainer}>
        <Category category={'smart-watch'} navigation={navigation} />
        <Category category={'keyboard'} navigation={navigation} />
        <Category category={'monitor'} navigation={navigation} />
        <Category category={'mouse'} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryList: {
    backgroundColor: '#fcf6e8',
    width: '90%',
    height: 200,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  categoryContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
});

export default CategoryList;
