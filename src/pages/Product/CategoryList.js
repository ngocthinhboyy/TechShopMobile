import React from 'react';
import { View, Text } from 'react-native';
import Category from '../../components/Product/Category';

const CategoryList = () => {
    return (
        <View>
            <Category category={'phone'}/>
            <Category category={'headphone'}/>
            <Category category={'console'}/>
            <Category category={'laptop'}/>
            <Category category={'smart-watch'}/>
            <Category category={'keyboard'}/>
            <Category category={'monitor'}/>
            <Category category={'mouse'}/>
            <Category category={'console'}/>
            <Category category={'laptop'}/>
            <Category category={'phone'}/>
            <Category category={'headphone'}/>
            <Category category={'console'}/>
            <Category category={'laptop'}/>
        </View>
    );
};

export default CategoryList;