import React from 'react';
import { Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import HeaderEdit from '../../components/User/HeaderEdit';
import EditShipping from '../../components/User/EditShippingInfo/EditShipping';

const EditShippingInfo = ({navigation}) => {
    return (
        <Fragment>
            <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>
            <SafeAreaView style={{backgroundColor: '#fcebc6'}}>
                <HeaderEdit navigation={navigation}/>
                <EditShipping navigation={navigation}/>
            </SafeAreaView>
        </Fragment>
    );
};

export default EditShippingInfo;