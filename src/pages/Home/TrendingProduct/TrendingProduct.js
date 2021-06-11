import React, {useState} from 'react';
import { Text, View } from 'react-native';
import TrendingProductCarousel from '../TrendingProduct/TrendingProductCarousel';

const TrendingProduct = () => {
    const [trendingProductList, setTrendingProductList] = useState([
        {
            productImage: require("../../../assets/img/pic3.jpg"),
            productName: 'Macbook Pro',
            productPrice: '60.000.000đ'
        },
        {
            productImage: require("../../../assets/img/pic1.jpg"),
            productName: 'Audio System',
            productPrice: '2.000.000đ'
        },
        {
            productImage: require("../../../assets/img/pic6.jpeg"),
            productName: 'Iphone 12 Pro',
            productPrice: '60.000.000đ'
        },
        {
            productImage: require("../../../assets/img/footer.jpeg"),
            productName: 'Iphone 8 plus',
            productPrice: '60.000.000đ'
        },
        {
            productImage: require("../../../assets/img/footer1.jpeg"),
            productName: 'Airpod Pro',
            productPrice: '60.000.000đ'
        },
        {
            productImage: require("../../../assets/img/footer1.jpeg"),
            productName: 'Airpod 2',
            productPrice: '60.000.000đ'
        },
        {
            productImage: require("../../../assets/img/footer1.jpeg"),
            productName: 'Ipad Pro',
            productPrice: '60.000.000đ'
        },
        {
            productImage: require("../../../assets/img/footer1.jpeg"),
            productName: 'Macbook Air',
            productPrice: '60.000.000đ'
        },
    ]);
    return (
        <View style={{backgroundColor: '#fcebc6', width:'90%', marginTop: 20}}>
            <Text style={{color: '#e77733',fontSize:20}}>Trending Products</Text>
            <View style={{backgroundColor: 'red', height: 200}}>
                <TrendingProductCarousel trendingProductList={trendingProductList}/>
            </View>
        </View>
    );
};

export default TrendingProduct;