import React, { createContext, useState, useEffect } from "react";
import { apiLogin, getUserProfile } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const token = localStorage.getItem("accessToken");
  const userDataLocal = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (token && isAuthenticated) {
          const userData = await getUserProfile(token);
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
        }
      } catch (error) {
        console.error("프로필 정보를 가져오지 못했습니다:", error);
      }
    };

    fetchProfile();
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  const login = async (formData) => {    
    const response = await apiLogin(formData);
    localStorage.setItem("accessToken", response.accessToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        token,
        user,
        setUser,
        userDataLocal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
