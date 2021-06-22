import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Switch, Icon } from 'react-native-elements';

const EditShipping = () => {
    return (
        <View style={{width: '100%', marginVertical: 30, height: '100%'}}>
            <View style={{width: '100%',alignItems: 'center'}}>
                <View style={{width: '90%'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Edit shipping info</Text>
                </View>
                <View style={{width:'90%', marginTop: 50}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Full Name</Text>
                </View>
                <View style={{width: '95%', marginVertical: 10}}>
                    <Input
                            containerStyle={{width: '100%', borderBottomColor: ' red'}}
                            inputStyle={{fontSize:15, color: 'black'}}
                            inputContainerStyle={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                            autoCapitalize='words'
                            labelStyle={{color: 'black'}}
                            value='Ngọc Thịnh'
                        />
                </View>
                <View style={{width:'90%', marginTop: 5}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Phone Number</Text>
                </View>
                <View style={{width: '95%', marginVertical: 10}}>
                    <Input
                            containerStyle={{width: '100%'}}
                            inputStyle={{fontSize:15, color: 'black'}}
                            autoCapitalize='words'
                            inputContainerStyle={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                            value='(+84) 825 494 593'
                        />
                </View>
                <View style={{width:'90%', marginTop: 5, marginBottom: 5}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Delivery Address</Text>
                </View>
                <View style={{width: '90%', marginVertical: 10, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>City</Text>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>TP. Hồ Chí Minh</Text>
                        <Text style={{marginLeft: 10, fontSize: 20, marginBottom: 3, color: 'gray'}}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: 0.3, backgroundColor: '#a19791', marginBottom: 5}}></View>
                <View style={{width: '90%', marginVertical: 10, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>District</Text>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Quận 9</Text>
                        <Text style={{marginLeft: 8, fontSize: 20, marginBottom: 3, color: 'gray'}}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: 0.3, backgroundColor: '#a19791', marginBottom: 5}}></View>
                <View style={{width: '90%', marginVertical: 10, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Ward</Text>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Phường Tăng Nhơn Phú B</Text>
                        <Text style={{marginLeft: 8, fontSize: 20, marginBottom: 3, color: 'gray'}}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: 0.3, backgroundColor: '#a19791', marginBottom: 15}}></View>
                <View style={{width:'90%', marginTop: 5}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Detailed Address</Text>
                </View>
                <View style={{width: '95%', marginVertical: 10}}>
                    <Input
                            containerStyle={{width: '100%', borderBottomColor: ' red'}}
                            inputStyle={{fontSize:14, color: 'black'}}
                            inputContainerStyle={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                            autoCapitalize='words'
                            labelStyle={{color: 'black'}}
                            value='số 207, đường C25'
                        />
                </View>
                <View style={{width:'90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Set As Default Address</Text>
                    <Switch style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }} value={true} color="#e77733" />
                </View>
                <View style={{width:'90%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon
                            name="location-on"
                            type="material-outlined"
                            color="#e77733"
                            size={30}
                        />
                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 15, fontWeight: '400'}}>Select Location</Text>
                            <Text style={{fontSize: 12, fontWeight: '300'}}>For more accurate location.</Text>
                        </View>
                    </View>
                    <Text style={{marginLeft: 10, fontSize: 20, marginBottom: 3, color: 'gray'}}>{'>'}</Text>
                </View>
            </View>
        </View>
    );
};

export default EditShipping;