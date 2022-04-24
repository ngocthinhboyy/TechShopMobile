import AsyncStorage from '@react-native-async-storage/async-storage';

export function authHeader() {
  // let token = cookiesService.getCookies("user");
  let token = AsyncStorage.getItem("user");

  if (token) {
    return `Bearer ${token}`;
  } else {
    return {};
  }
}
