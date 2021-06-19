import React from 'react';
import { View } from 'react-native';
import Category from '../../components/Product/Category';
import { CategoryListData } from '../../Data/categoryListData';

const CategoryList = ({changeCategory, activeCategory}) => {
  const categoryList = [...CategoryListData]
  const renderCategoryList = categoryList => {
    return categoryList.map((category, index) => {
      return (
        <Category
          activeCategory={activeCategory}
          key={index}
          category={category}
          changeCategory={changeCategory}
        />
      );
    });
  };
  return <View>{renderCategoryList(categoryList)}</View>;
};

export default CategoryList;
