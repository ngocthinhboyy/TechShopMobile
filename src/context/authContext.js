import React, {createContext, useState} from 'react';
import UserApi from '../api/userApi';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeLoginStatus = () => {
    console.log('change login status');
    UserApi.login({
      email: 'phuongdinh1802@gmail.com.vn',
      pswd: '1',
    }).then(setIsLoggedIn(!isLoggedIn));
  };
  return (
    <AuthContext.Provider value={{isLoggedIn, changeLoginStatus}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
