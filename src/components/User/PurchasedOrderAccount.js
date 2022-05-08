import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import { getAllUserOrders } from "../../utilities/slices/userSlice";

const PurchasedOrderAccount = ({navigation}) => {
  const {listOrders} = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  // get list orders
  useEffect(() => {
    async function fetchOrders() {
      await dispatch(getAllUserOrders());
    }
    if (!listOrders) {
      fetchOrders();
    }
  }, [dispatch]);

  return listOrders ? (
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
            Pending ({listOrders['placed-order']?.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order', {tabRender: 'Picking'})}>
          <Icon name="storefront" type="material" color="#ee8241" size={40} />
          <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>
            Picking ({listOrders.handling.length})
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
            Shipping ({listOrders.shipped.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Order', {tabRender: 'Completed'})
          }>
          <Icon name="star-outline" type="material" color="#ee8241" size={40} />
          <Text style={{marginTop: 20, fontSize: 13, fontWeight: '200'}}>
            Rating ({listOrders.deliveried.length})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    null
  );
};

export default PurchasedOrderAccount;
