import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "../layout/LayOut";
import SignUp from "../pages/SignUp";
import Login from "../pages/login";
import { AuthProvider } from "../contexts/AuthContext";
import MyPage from "../pages/MyPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import Home from "../pages/Home";
import { styled } from "styled-components";
import { MbtiProvider } from "../contexts/MBTIContext";

const Router = () => {
  return (
    <AuthProvider>
      <MbtiProvider>
        <BrowserRouter>
          <RoutesArea>
            <Routes>
              <Route path="/" element={<LayOut />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/mypage"
                  element={
                    <ProtectedRoute>
                      <MyPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/test"
                  element={
                    <ProtectedRoute>
                      <Test />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/testresult"
                  element={
                    <ProtectedRoute>
                      <TestResult />{" "}
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </RoutesArea>
        </BrowserRouter>
      </MbtiProvider>
    </AuthProvider>
  );
};

export default Router;

export const RoutesArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1400px;
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 100px;
  min-height: 400px;
`;
