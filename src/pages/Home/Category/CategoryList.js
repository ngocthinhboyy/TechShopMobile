import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Category from '../../../components/Home/Category';
import {getCategories} from '../../../utilities/slices/categorySlice';

const CategoryList = ({navigation}) => {
  const categoryList = useSelector(state => state.category.data);
  const dispatch = useDispatch();

  // get categories
  useEffect(() => {
    async function fetchCategories() {
      await dispatch(getCategories());
    }
    if (!categoryList.length) {
      fetchCategories();
    }
  }, [dispatch, categoryList]);

  return (
    <View style={styles.categoryList}>
      <View style={styles.categoryContainer}>
        {categoryList.slice(0, 4).map(item => (
          <Category category={item} navigation={navigation} />
        ))}
      </View>
      <View style={styles.categoryContainer}>
        {categoryList.slice(4, 8).map(item => (
          <Category category={item} navigation={navigation} />
        ))}
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
