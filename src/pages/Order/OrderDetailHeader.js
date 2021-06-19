import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const OrderDetailHeader = ({navigation}) => {
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
          <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 23, fontWeight: '500'}}>Order Details</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#fcebc6'}}>
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

export default OrderDetailHeader;