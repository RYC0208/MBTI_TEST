import React, { useContext, useEffect } from "react";
import TestResultList from "./../components/TestResultList";
import styled from "styled-components";
import useMbtiStore from "../zustand/mbtiStore";

const TestResult = () => {
  const { testResults, fetchTestResults } = useMbtiStore();

  useEffect(() => {
    fetchTestResults();
  }, [testResults]);

  return (
    <TestResultContainer>
      <h1 className="TestResultH1">모든 테스트 결과</h1>
      <TestResultList list={testResults} />
    </TestResultContainer>
  );
};

export default TestResult;

const TestResultContainer = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .TestResultH1 {
    font-size: 30px;
    font-weight: 600;
    color: #5e5e5e;
    padding: 10px;
  }
`;
