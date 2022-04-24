import Config from "react-native-config";

const parseImages = (imagesString) => {
  if (imagesString) {
    var images = imagesString.replace(/'/g, '"');
    images = JSON.parse(images);
    images = images.map((image) => `${Config.REACT_APP_API_URL}${image}`);
    return images;
  }
  return [];
};
export default parseImages;
