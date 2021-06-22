import React from 'react';
import { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView,View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Ward = ({navigation}) => {
    const listWard =[
        "Phường Hiệp Phú",
        "Phường Long Bình",
        "Phường Long Phước",
        "Phường Long Thạnh Mỹ",
        "Phường Long Trường",
        "Phường Phú Hữu",
        "Phường Phước Bình",
        "Phường Phước Long A",
        "Phường Phước Long B",
        "Phường Trường Thạnh",
        "Phường Tân Phú",
        "Phường Tăng Nhơn Phú A",
        "Phường Tăng Nhơn Phú B"
    ];
    const renderWard = list => {
        return list.map((ward, index) => {
            return(
                <View key={index} style={{width: '100%', alignItems: 'flex-end'}}>
                    <View style={{width: '93%',paddingVertical: 15, paddingHorizontal: 5, borderBottomWidth: 0.2}}>
                        <Text>{ward}</Text>
                    </View>
                </View>
            )
        })
    }

    return (
        <Fragment>
            <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>
            <SafeAreaView style={{backgroundColor: '#fcebc6'}}>
                <View style={{width: '100%', alignItems: 'center', marginBottom: 10}}> 
                        <View style={{width: '90%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Icon
                            name='keyboard-backspace'
                            type='material'
                            color='black'
                            size= {35}
                            onPress={()=> navigation.goBack()}
                            />
                            <TouchableOpacity style={{width:'60%'}} onPress={() => {navigation.goBack()}}>
                                <Text style={{fontWeight: '400', letterSpacing: 1, fontSize: 23}}>Ward</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#a6a7a6',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 3},
                    shadowOpacity: 0.25,
                    shadowRadius: 1.5,
                }}></View>
                <View style={{height: 1000}}>
                    <ScrollView style={{height: 800}}>
                        {renderWard(listWard)}
                    </ScrollView>
                </View>
                </SafeAreaView>
        </Fragment>
    );
};

export default Ward;