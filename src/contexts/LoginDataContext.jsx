import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

const LoginDataContext = createContext();

function LoginDataProvider({ children }) {
  const [loginData, setLoginData] = useState();

  return <LoginDataContext.Provider value={{ loginData, setLoginData }}>{children}</LoginDataContext.Provider>;
}

LoginDataProvider.propTypes = {
  children: node.isRequired,
};

const useLoginData = () => useContext(LoginDataContext);

export { LoginDataProvider, useLoginData };
