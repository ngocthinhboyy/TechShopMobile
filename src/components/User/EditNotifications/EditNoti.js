import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Switch} from 'react-native-elements';

const EditNoti = () => {
    return (
        <View style={{width: '100%', marginVertical: 30, height: '100%'}}>
            <View style={{width: '100%',alignItems: 'center'}}>
            <View style={{width: '90%'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Notification</Text>
            </View>
            <View style={{width:'90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, paddingBottom: 20 , borderBottomWidth: 0.2, marginBottom: 20}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Push Notifications</Text>
                    <Switch style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }} value={true} color="#e77733" />
            </View>
            <View style={{width:'90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20 , borderBottomWidth: 0.2, marginBottom: 20}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Chat Messages</Text>
                    <Switch style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }} value={true} color="#e77733" />
            </View>
            <View style={{width: '90%',alignItems: 'center', paddingBottom: 20 , borderBottomWidth: 0.2, marginBottom: 20}}>
                <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:10}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Order Updates</Text>
                    <Switch style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }} value={false} color="#e77733" />
                </View>
                <View style={{width: '100%'}}>
                    <Text style={{fontSize: 12, fontWeight: '200'}}>Notify when there are updates about my orders, including payment related updates.</Text>
                </View>
            </View>
            <View style={{width: '90%',alignItems: 'center', paddingBottom: 20 , borderBottomWidth: 0.2, marginBottom: 20}}>
                <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:10}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Newsletter</Text>
                    <Switch style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }} value={false} color="#e77733" />
                </View>
                <View style={{width: '100%'}}>
                    <Text style={{fontSize: 12, fontWeight: '200'}}>Send me news on the latest updates, trends & deals.</Text>
                </View>
            </View>
            <View style={{width: '90%',alignItems: 'center', paddingBottom: 20 , borderBottomWidth: 0.2, marginBottom: 20}}>
                <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:10}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Personalised Content</Text>
                    <Switch style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }} value={true} color="#e77733" />
                </View>
                <View style={{width: '100%'}}>
                    <Text style={{fontSize: 12, fontWeight: '200'}}>Send me personalized updates (e.g. your birthday gift).</Text>
                </View>
            </View>

            </View>
        </View>
    );
};

export default EditNoti;