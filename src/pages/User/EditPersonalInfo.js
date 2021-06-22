import React from 'react';
import { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, SafeAreaView } from 'react-native';
import {Icon} from 'react-native-elements';
import EditInfo from '../../components/User/EditPersonalInfo/EditInfo';
import HeaderEdit from '../../components/User/HeaderEdit';

const EditPersonalInfo = ({navigation}) => {
    return (
        <Fragment>
            <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>
            <SafeAreaView style={{backgroundColor: '#fcebc6'}}>
                <HeaderEdit navigation={navigation}/>
                <EditInfo/>
            </SafeAreaView>
        </Fragment>
    );
};

export default EditPersonalInfo;