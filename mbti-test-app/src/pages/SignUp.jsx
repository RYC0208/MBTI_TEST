import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleRegister = async (formData) => {
    try {
      const response = await register(formData);
      navigate("/");
    } catch (error) {
      console.error("회원가입 실패:", error.message);
    }
  };
  return (
    <SignUpContainer>
      <SignUpH1>회원가입</SignUpH1>
      <AuthForm mode="signup" onSubmit={handleRegister} />
      <p>
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </SignUpContainer>
  );
};

export default SignUp;


const SignUpH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
`
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 450px;
  padding: 40px;
  border-radius: 15px;

  a{
    color: red;
  }
`;