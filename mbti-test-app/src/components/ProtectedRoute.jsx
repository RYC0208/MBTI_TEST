import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, token } = useAuthStore();

  if (!isAuthenticated || !token) {
    alert("로그인 이용자만 사용 가능");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
