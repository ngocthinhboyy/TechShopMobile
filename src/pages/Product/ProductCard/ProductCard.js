import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ProductCard = ({product}) => {
    const data = {
        productImage: require("../../../assets/img/pic3.jpg"),
        productName: 'Macbook Pro',
        productPrice: '60.000.000đ'
    };
    return (
        <View style={styles.container}>
            <Image
                source={product.productImage}
                style={{width: '80%', height: 200, borderRadius: 10, marginTop: 5, borderRadius: 20}}
            />
            <Text style={{color: 'black',fontSize:17, fontWeight: '300', marginTop: 10}}>{product.productName}</Text>
            <Text style={{color: 'black',fontSize:15, fontWeight: '200', marginTop: 5}}>{product.productPrice}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fef5e2', 
        alignItems:'center' ,
        width:'49%',
        borderWidth: 0,
        height: 280,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 23
    }
})

export default ProductCard;