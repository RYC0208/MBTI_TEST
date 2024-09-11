import React, { useContext } from "react";
import AuthForm from "../components/AuthFor
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      navigate("/");
    } catch (error) {
      alert(`로그인 실패 : ${error.message}`);
    }
  };

  return (
    <LoginContainer>
      <LoginH1>로그인</LoginH1>
      <AuthForm mode="login" onSubmit={handleLogin} />
      <p>
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </p>
    </LoginContainer>
  );
};

export default Login;
const LoginH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 450px;
  padding: 40px;
  border-radius: 15px;

  a {
    color: red;
  }
`;
