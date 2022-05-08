import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Category = ({category, changeCategory, activeCategory}) => {
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
      style={{
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: 'black',
        borderWidth: 0,
        width: '90%',
        height: 100,
        backgroundColor: '#fcf6e8',
      }}
      onPress={() => changeCategory(category.slug)}>
      <Icon
        name={iconName}
        type={iconType}
        color={activeCategory === category.slug ? '#e77733' : 'black'}
        size={40}
      />
      <Text
        numberOfLines={1}
        style={{
          color: `${activeCategory === category.slug ? '#e77733' : 'black'}`,
          fontSize: 12,
          fontWeight: '300',
          marginTop: 7,
        }}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(Category);
