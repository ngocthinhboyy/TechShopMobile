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
      onPress={() => changeCategory(category.slug)}>
      <Icon
        name="laptop-mac"
        type="material"
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
