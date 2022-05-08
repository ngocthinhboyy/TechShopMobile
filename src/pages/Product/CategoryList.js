import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Category from '../../components/Product/Category';
import { getCategories } from '../../utilities/slices/categorySlice';

const CategoryList = ({changeCategory, activeCategory}) => {
  const categoryList = useSelector((state) => state.category.data);
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
  return <View>{categoryList.length > 0 && renderCategoryList(categoryList)}</View>;
};

export default CategoryList;
