import { useContext, useState } from "react";
import AuthContext from "./AuthContext";

const getData = () => JSON.parse(localStorage.getItem("mydata"));

export const AuthProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(getData());

  const auth = (Auth) => {
    setLoginUser(Auth);
    const data = JSON.stringify(Auth);
    localStorage.setItem("mydata", data);
  };

  const logout = () => {
    localStorage.clear();
    setLoginUser({});
  };

  const contextValue = {
    loginUser,
    auth,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
