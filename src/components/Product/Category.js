import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Category = ({category, changeCategory, activeCategory}) => {
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
      onPress={() => changeCategory(category.categoryName)}>
      <Icon
        name={category.iconName}
        type={category.iconType}
        color={activeCategory === category.categoryName ? '#e77733' : 'black'}
        size={40}
      />
      <Text
        style={{
          color: `${
            activeCategory === category.categoryName ? '#e77733' : 'black'
          }`,
          fontSize: 12,
          fontWeight: '300',
          marginTop: 7,
        }}>
        {category.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(Category);
