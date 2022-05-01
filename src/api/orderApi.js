import * as UrlConstant from '../utilities/UrlConstant';
import axiosClientAuthen from './axiosClientAuthen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderApi = {
  getDetailedOrder: async id => {
    const url = `${UrlConstant.GET_DETAILED_ORDER}/${id}`;
    return axiosClientAuthen.get(url);
  },
  placeOrder: async params => {
    const token = await AsyncStorage.getItem('user')
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };
    return fetch('http://localhost:8080/api/v1/invoice', requestOptions)
    
      .then(responseJson => {
        return responseJson
      })
      .catch(error => {
        console.log(error)
        return Promise.reject(error)
      });
  },
  getAllUserOrders: async () => {
    const url = `${UrlConstant.GET_ALL_USER_ORDERS}`;
    return axiosClientAuthen.get(url);
  },
  getOrder: async id => {
    const url = `${UrlConstant.GET_DETAILED_ORDER}/${id}`;
    return axiosClientAuthen.get(url);
  },
  cancelOrder: async (id, reasonCancelling) => {
    const url = `${UrlConstant.CANCEL_ORDER}/${id}`;

    return axiosClientAuthen
      .put(url, reasonCancelling.reasonContent)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  },
  updateOrderStatus: async id => {
    const url = `${UrlConstant.UPDATE_ORDER_STATUS}/${id}`;
    return axiosClientAuthen
      .put(url)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  },
  getAllAdminOrders: async ({month, year}) => {
    const url = `${UrlConstant.GET_ALL_ADMIN_ORDERS}/${month}/${year}`;
    return axiosClientAuthen.get(url);
  },
  transferToShipper: async (orderId, shipperId) => {
    const url = `${UrlConstant.TRANSFER_TO_SHIPPER}/${orderId}/${shipperId}`;

    return axiosClientAuthen
      .put(url)
      .then(response => {
        return response;
      })
      .catch(error => Promise.reject(error));
  },
  getShippingInfo: async id => {
    return {
      name: 'Le Minh Huy',
      phone: '0936498844',
    };
  },
};
export default OrderApi;
