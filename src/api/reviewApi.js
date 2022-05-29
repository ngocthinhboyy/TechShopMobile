import * as UrlConstant from '../utilities/UrlConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReviewApi = {
  getReviewsByProductIDByPagination: async (id, page, reviewsPerPage) => {
    const url = `http://localhost:8080${UrlConstant.GET_ALL_REVIEWS_BY_PRODUCTID}/${id}?limit=4&page=1`;
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  },
  addReview: async params => {
    const url = `http://localhost:8080${UrlConstant.ADD_REVIEW}`;
    const token = await AsyncStorage.getItem('user');
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };
    return fetch(url, requestOptions)
      .then(responseJson => responseJson)
      .catch(error => {
        return Promise.reject(error);
      });
  },
  getRecommendationReviewStatus: async params => {
    // python server
    const body = {
      sentences: params.map(review => review.reviewContent),
    };
    const url = `http://127.00.0.1:9090/comment`;
    const requestOptions = {
      method: 'POST',
      'content-type': 'application/json',
      body: JSON.stringify(body),
    };
    return fetch(url, requestOptions)
      .then(res => res.json())
      .then(response => {
        const arrStatus = response.results;
        var i = 0;
        const result = params.map(review => {
          const newData = {status: arrStatus[i], ...review};
          i += 1;
          return newData;
        });
        return result;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
};
export default ReviewApi;
