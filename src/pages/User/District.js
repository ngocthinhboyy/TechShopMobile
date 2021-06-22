import React from 'react';
import { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView,View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const District = ({navigation}) => {
    const listDistrict =[
        "Huyện Bình Chánh",
        "Huyện Cần Giờ",
        "Huyện Củ Chi",
        "Huyện Hóc Môn",
        "Huyện Nhà Bè",
        "Quận 1",
        "Quận 10",
        "Quận 11",
        "Quận 12",
        "Quận 2",
        "Quận 3",
        "Quận 4",
        "Quận 5",
        "Quận 6",
        "Quận 7",
        "Quận 8",
        "Quận 9",
        "Quận Bình Thạnh",
        "Quận Bình Tân",
        "Quận Gò Vấp",
        "Quận Phú Nhuận",
        "Quận Thủ Đức",
        "Quận Tân Bình",
        "Quận Tân Phú",
    ];
    const renderDistrict = list => {
        return list.map((district, index) => {
            return(
                <View key={index} style={{width: '100%', alignItems: 'flex-end'}}>
                    <View style={{width: '93%',paddingVertical: 15, paddingHorizontal: 5, borderBottomWidth: 0.2}}>
                        <Text>{district}</Text>
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
                                <Text style={{fontWeight: '400', letterSpacing: 1, fontSize: 23}}>District</Text>
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
                        {renderDistrict(listDistrict)}
                    </ScrollView>
                </View>
                </SafeAreaView>
        </Fragment>
    );
};

export default District;