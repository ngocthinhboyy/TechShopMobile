import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const HeaderProductDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#fcebc6'}}>
                <Icon
                name='keyboard-backspace'
                type='material'
                color='black'
                size= {35}
                onPress={()=> navigation.goBack()}
                />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#fcebc6', width: '40%'}}>
                <Icon
                    type= 'ionicon'
                    name='search-outline'
                    color='black' 
                    onPress={()=> navigation.navigate('Product')}
                    />
                <Icon
                    type= 'ionicon'
                    name='home-outline'
                    color='black'
                    onPress={()=> navigation.navigate('Home')}
                    />
                 <Icon
                    name='cart-outline'
                    type= 'ionicon'
                    color='black'
                    onPress={()=> navigation.navigate('Cart')}
                    />
                    <Icon
                    type= 'material'
                    name='more-horiz'
                    color='black' />
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      width: '90%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fcebc6',
      alignItems:'center'
  }
})

export default HeaderProductDetail;