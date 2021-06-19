import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const changeLoginStatus = () => {
    console.log('change login status');
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <AuthContext.Provider value={{isLoggedIn, changeLoginStatus}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;