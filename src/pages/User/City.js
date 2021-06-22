import React from 'react';
import { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView,View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const City = ({navigation}) => {
    const listCity =[
        "An Giang",
        "Bà Rịa - Vũng Tàu",
        "Bình Dương",
        "Bình Phước",
        "Bình Thuận",
        "Bình Định",
        "Bạc Liêu",
        "Bắc Giang",
        "Bắc Kạn",
        "Bắc Ninh",
        "Bến Tre",
        "Cao Bằng",
        "Cà Mau",
        "Cần Thơ",
        "Gia Lai",
        "Hà Giang",
        "Hà Nam",
        "Hà Nội",
        "Hà Tĩnh",
        "Hoà Bình",
        "Hưng Yên",
        "Hải Dương",
        "Hải Phòng",
        "Hậu Giang",
        "Khánh Hoà",
        "Kiên Giang",
        "Kon Tum",
        "Lai Châu",
        "Long An",
        "Lào Cai",
        "Lâm Đồng",
        "Lạng Sơn",
        "Nam Định",
        "Nghệ An",
        "Ninh Bình",
        "Ninh Thuận",
        "Phú Thọ",
        "Phú Yên",
        "Quảng Bình",
        "Quảng Nam",
        "Quảng Ngãi",
        "Quảng Ninh",
        "Quảng Trị",
        "Sóc Trăng",
        "Sơn La",
        "Thanh Hoá",
        "Thái Bình",
        "Thái Nguyên",
        "Thừa Thiên Huế",
        "Tiền Giang",
        "TP. Hồ Chí Minh",
        "Trà Vinh",
        "Tuyên Quang",
        "Tây Ninh",
        "Vĩnh Long",
        "Vĩnh Phúc",
        "Yên Bái",
        "Điện Biên",
        "Đà Nẵng",
        "Đắk Lắk",
        "Đắk Nông",
        "Đồng Nai",
        "Đồng Tháp"
    ];
    const renderCity = list => {
        return list.map((city, index) => {
            return(
                <View key={index} style={{width: '100%', alignItems: 'flex-end'}}>
                    <View style={{width: '93%',paddingVertical: 15, paddingHorizontal: 5, borderBottomWidth: 0.2}}>
                        <Text>{city}</Text>
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
                                <Text style={{fontWeight: '400', letterSpacing: 1, fontSize: 23}}>City</Text>
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
                        {renderCity(listCity)}
                    </ScrollView>
                </View>
                </SafeAreaView>
        </Fragment>
    );
};

export default City;