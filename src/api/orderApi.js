import * as UrlConstant from '../utilities/UrlConstant';
import axiosClientAuthen from './axiosClientAuthen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderApi = {
  getDetailedOrder: async id => {
    const url = `${UrlConstant.GET_DETAILED_ORDER}/${id}`;
    return axiosClientAuthen.get(url);
  },
  placeOrder: async params => {
    const token = await AsyncStorage.getItem('user');
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };
    return fetch('http://localhost:8080/api/v1/invoice', requestOptions)
      .then(response => response.json())

      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  getAllUserOrders: async () => {
    const url = 'http://localhost:8080/api/v1/invoice/user';
    const token = await AsyncStorage.getItem('user');
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  getOrder: async id => {
    const url = `http://localhost:8080${UrlConstant.GET_DETAILED_ORDER}/${id}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  cancelOrder: async id => {
    const url = `http://localhost:8080${UrlConstant.CANCEL_ORDER}/${id}`;

    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(''),
    };
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  updateOrderStatus: async id => {
    const url = `http://localhost:8080${UrlConstant.UPDATE_ORDER_STATUS}/${id}`;
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
};
export default OrderApi;
