import React, { useState } from "react";
import styled from "styled-components";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: mode === "signup" ? "" : undefined,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <AuthFormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />

        {mode === "signup" && (
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
          />
        )}

        <button type="submit">
          {mode === "login" ? "로그인" : "회원가입"}
        </button>
      </form>
    </AuthFormContainer>
  );
};

export default AuthForm;

const AuthFormContainer = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
      height: 50px;
      border: 1px solid;
      border-radius: 10px;
    }
    button {
      border: 1px solid;
      background-color: #ff4b4b;
      color: white;
      height: 50px;
      border-radius: 10px;
    }
  }
`;
