import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Category = ({category, navigation}) => {
  let iconName = '';
  let iconType = '';
  let categoryName = '';
  if (category.slug === 'smart-phone') {
    iconName = 'phone-portrait-outline';
    iconType = 'ionicon';
    categoryName = 'Phone';
  } else if (category.slug === 'smart-watch') {
    iconName = 'watch-outline';
    iconType = 'ionicon';
    categoryName = 'Watch';
  } else if (category.slug === 'headphone') {
    iconName = 'headset';
    iconType = 'ionicon';
    categoryName = 'Headphone';
  } else if (category.slug === 'keyboard') {
    iconName = 'keyboard';
    iconType = 'material';
    categoryName = 'Keyboard';
  } else if (category.slug === 'monitor') {
    iconName = 'connected-tv';
    iconType = 'material';
    categoryName = 'Monitor';
  } else if (category.slug === 'laptop') {
    iconName = 'laptop-mac';
    iconType = 'material';
    categoryName = 'Laptop';
  } else if (category.slug === 'mouse') {
    iconName = 'mouse';
    iconType = 'material';
    categoryName = 'Mouse';
  } else if (category.slug === 'pc-accessories') {
    iconName = 'sports-esports';
    iconType = 'material';
    categoryName = 'Console';
  }
  return (
    <TouchableOpacity
      style={{alignItems: 'center'}}
      onPress={() =>
        navigation.navigate('Product', {slug: category.slug})
      }>
      <Icon name={iconName} type={iconType} color="black" size={45} />
      <Text style={{color: 'black', fontSize: 12, fontWeight: '300'}} numberOfLines={1}>
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;
