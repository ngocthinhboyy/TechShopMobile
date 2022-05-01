import * as UrlConstant from '../utilities/UrlConstant';
import axiosClient from './axiosClient';
import axiosClientAuthen from './axiosClientAuthen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserApi = {
  login: async params => {
    let {email, pswd} = params;
    // const url = `${UrlConstant.LOGIN}`;
    const data = JSON.stringify({email, pswd});
    // console.log("hiii", url)
    // return axiosClient
    //   .post(url, data)

    //   .then((response) => {
    //     console.log(response)
    //     AsyncStorage.setItem("access", response.role);
    //     AsyncStorage.setItem("user", response.access_token);
    //     AsyncStorage.setItem("fullname", response.fullname);
    //     return response;
    //   })
    //   .catch((error) => {
    //     return Promise.reject(error);
    //   });
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data,
    };
    return fetch('http://localhost:8080/api/v1/auth/login', requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        AsyncStorage.setItem('access', responseJson.role);
        AsyncStorage.setItem('user', responseJson.access_token);
        AsyncStorage.setItem('fullname', responseJson.fullname);
        return responseJson;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  getShippingInfo: async () => {
    const url = `${UrlConstant.GET_USER_SHIPPING_INFO}`;
    return axiosClientAuthen
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  signup: userInfo => {
    const url = `${UrlConstant.SIGNUP}`;
    const data = JSON.stringify(userInfo);

    return axiosClientAuthen
      .post(url, data)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response) {
          return Promise.reject(error.response.data);
        } else {
          return Promise.reject(null);
        }
      });
  },
};
export default UserApi;
