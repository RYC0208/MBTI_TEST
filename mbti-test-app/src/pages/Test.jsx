import React from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResult";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuthStore from "../zustand/authStore";

const Test = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      date: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/testresult");
  };

  return (
    <TestContainer>
      <h1>MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </TestContainer>
  );
};

export default Test;

const TestContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
`;
