import * as UrlConstant from '../utilities/UrlConstant';

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
    console.log(params);
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
  getRecommendationReviewStatus: async(params) => {
    console.log(params)
    // python server
    const url = `http://localhost:8080${UrlConstant.ADD_REVIEW}`;
    const requestOptions = {
      method: 'POST',
      body: {
        sentence: params.map(review =>  review.reviewContent)
      },
    };
    return fetch(url, requestOptions)
      .then(response => {
        const arrStatus = response.results
        for(let i = 0; i < params.length; i++) {
          params[i].status = arrStatus[i]
          params = [... params[i]]
        }
        console.log(params)
        return params
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
};
export default ReviewApi;
