import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
    const navigate=useNavigate();
  const [state, setState] = useState({
    isAuth: false,
    token: null
  });

  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token
    });

  }
  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null
    });
    // navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ setState,state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
