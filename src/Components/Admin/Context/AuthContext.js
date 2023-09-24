import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform authentication logic, set user data, and handle errors if any.
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic, clear user data, and handle errors if any.
    setUser(null);
    if (localStorage.getItem("Comptoken")) {
      localStorage.removeItem("Comptoken");
    }
    if (localStorage.getItem("Govtoken")) {
      localStorage.removeItem("Govtoken");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
