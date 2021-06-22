import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import {Icon} from 'react-native-elements';

const HeaderEdit = ({navigation}) => {
    return (
        <View style={{width: '100%', alignItems: 'center'}}> 
                    <View style={{width: '90%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Icon
                        name='keyboard-backspace'
                        type='material'
                        color='black'
                        size= {35}
                        onPress={()=> navigation.goBack()}
                        />
                        <TouchableOpacity onPress={() => {navigation.goBack()}}>
                            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold', letterSpacing: 1, fontSize: 14}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    );
};

export default HeaderEdit;