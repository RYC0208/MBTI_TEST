import React, { useContext } from "react";
import TestResultList from "./../components/TestResultList";
import styled from "styled-components";
import { MbtiContext } from "../contexts/MBTIContext";

const TestResult = () => {
  const { testResults } = useContext(MbtiContext); // 이제 제대로 구조 분해 가능

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
  background-color: white;
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
