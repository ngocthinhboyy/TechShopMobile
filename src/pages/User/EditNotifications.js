import React from 'react';
import { Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import HeaderEdit from '../../components/User/HeaderEdit';
import EditNoti from '../../components/User/EditNotifications/EditNoti';

const EditNotifications = ({navigation}) => {
    return (
        <Fragment>
            <SafeAreaView style={{backgroundColor: '#fcebc6'}}></SafeAreaView>
            <SafeAreaView style={{backgroundColor: '#fcebc6'}}>
                <HeaderEdit navigation={navigation}/>
                <EditNoti/>
            </SafeAreaView>
        </Fragment>
    );
};

export default EditNotifications;