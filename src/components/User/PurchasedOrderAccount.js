import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {OrderContext} from '../../context/orderContext';

const PurchasedOrderAccount = ({navigation}) => {
  const {quantity} = useContext(OrderContext);
  return (
    <View style={{width: '85%', margin: 20}}>
      <Text style={{fontSize: 13, fontWeight: '600', color: '#a19791'}}>
        Purchased orders
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          marginTop: 30,
          borderBottomWidth: 0.5,
          paddingBottom: 30,
          borderBottomColor: '#a19791',
        }}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('Order', {tabRender: 'Pending'})}>
          <Icon name="receipt-long" type="material" color="#ee8241" size={40} />
          <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>
            Pending
          </Text>
          <Text style={{fontSize: 13, fontWeight: '200'}}>
            Confirmation ({quantity.pending})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order', {tabRender: 'Picking'})}>
          <Icon name="storefront" type="material" color="#ee8241" size={40} />
          <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>
            Picking ({quantity.picking})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order', {tabRender: 'Shipping'})}>
          <Icon
            name="local-shipping"
            type="material-outlined"
            color="#ee8241"
            size={40}
          />
          <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>
            Shipping ({quantity.shipping})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order', {tabRender: 'Rating'})}>
          <Icon name="star-outline" type="material" color="#ee8241" size={40} />
          <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>
            Rating ({quantity.rating})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PurchasedOrderAccount;
