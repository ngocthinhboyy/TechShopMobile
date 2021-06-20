import React, {useState} from 'react';
import { Text, View } from 'react-native';
import TrendingProductCarousel from '../TrendingProduct/TrendingProductCarousel';

const TrendingProduct = ({navigation}) => {
    
    return (
        <View style={{backgroundColor: '#fcebc6', width:'90%', marginTop: 20}}>
            <Text style={{color: '#e77733',fontSize:20}}>Trending Products</Text>
            <View style={{backgroundColor: 'red', height: 200}}>
                <TrendingProductCarousel navigation ={navigation}/>
            </View>
        </View>
    );
};

export default TrendingProduct;