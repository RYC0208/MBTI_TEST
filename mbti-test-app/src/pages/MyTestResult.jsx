import React, { useEffect } from "react";
import useMbtiStore from "../zustand/mbtiStore";
import useAuthStore from "../zustand/authStore";
import styled from "styled-components";
import TestResultItem from "../components/TestResultItem";
import { useNavigate } from "react-router-dom";

const MyTestResult = () => {
  const { user } = useAuthStore();
  const { testResults, fetchTestResults } = useMbtiStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTestResults();
  }, [testResults]);

  const goToAllResult = () => {
    navigate("/testresult");
  };

  return (
    <MyTestResultContainer>
      <h1 className="myTestResultH1">나의 MBTI 유형검사 기록</h1>
      <button onClick={goToAllResult}>모든 유저의 결과</button>
      {testResults
        .filter((result) => result.userId === user.userId)
        .map((result) => (
          <TestResultItem key={result.id} item={result} userId={user.userId} />
        ))}
    </MyTestResultContainer>
  );
};

export default MyTestResult;

const MyTestResultContainer = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .myTestResultH1 {
    font-size: 30px;
    font-weight: 600;
    color: #5e5e5e;
    padding: 10px;
  }
  button {
    border: 1px solid;
    background-color: #ff4b4b;
    color: white;
    width: 150px;
    height: 50px;
    border-radius: 10px;

    &:hover {
      background-color: #ffb8b8;
    }
  }
`;
