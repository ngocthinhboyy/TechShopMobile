import * as UrlConstant from "../utilities/UrlConstant";

const CategoryApi = {
  getAll: async () => {
    const url = `${UrlConstant.GET_ALL_CATEGORIES}`;
    return fetch(`http://localhost:8080${url}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error);
    });
  },
};
export default CategoryApi;
