import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, token } = useContext(AuthContext);
  if (!isAuthenticated && !token) {
    alert("로그인 이용자만 사용 가능")
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
