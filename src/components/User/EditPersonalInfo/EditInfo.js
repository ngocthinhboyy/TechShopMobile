import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Icon } from 'react-native-elements';

const EditInfo = () => {
    return (
        <View style={{width: '100%', marginVertical: 30, height: '100%'}}>
            <View style={{width: '100%',alignItems: 'center'}}>
                <View style={{width: '90%'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Edit personal info</Text>
                </View>
                <View style={{width:'90%', marginTop: 50}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>First name</Text>
                </View>
                <View style={{width: '95%', marginVertical: 10}}>
                    <Input
                            containerStyle={{width: '100%', borderBottomColor: ' red'}}
                            inputStyle={{fontSize:15, color: 'black'}}
                            inputContainerStyle={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                            autoCapitalize='words'
                            labelStyle={{color: 'black'}}
                            value='Thịnh'
                        />
                </View>
                <View style={{width:'90%', marginTop: 5}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Last name</Text>
                </View>
                <View style={{width: '95%', marginVertical: 10}}>
                    <Input
                            containerStyle={{width: '100%'}}
                            inputStyle={{fontSize:15, color: 'black'}}
                            autoCapitalize='words'
                            inputContainerStyle={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                            value='Ngọc'
                        />
                </View>
                <View style={{width:'90%', marginTop: 5}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Birthday</Text>
                </View>
                <View style={{width: '95%', marginVertical: 10}}>
                    <Input
                            containerStyle={{width: '100%'}}
                            inputStyle={{fontSize:15, color: 'black'}}
                            autoCapitalize='words'
                            inputContainerStyle={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                            value='23/12/2000'
                        />
                </View>
                <View style={{width:'90%', marginTop: 5}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Email</Text>
                </View>
                <View style={{width: '95%', marginVertical: 10}}>
                    <Input
                            containerStyle={{width: '100%'}}
                            inputStyle={{fontSize:15, color: 'black'}}
                            autoCapitalize='words'
                            inputContainerStyle={{borderBottomColor: 'black', borderBottomWidth: 0.5}}
                            value='ngocthinh@gm.uit.edu.vn'
                        />
                </View>
                <TouchableOpacity style={{width:'90%', marginTop: 5, flexDirection: 'row'}}>
                        <Icon
                              name='edit'
                              size={20}
                              color='black'
                              type='material'
                            />
                    <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 10}}>Change password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditInfo;