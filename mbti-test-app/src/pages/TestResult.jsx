import React from "react";
import TestResultList from "./../components/TestResultList";
import styled from "styled-components";
// import useMbtiStore from "../zustand/mbtiStore";
import { useTestResults } from "../hooks/mbtiQueries";

const TestResult = () => {
  const { data: testResults, isLoading, error } = useTestResults();

  // const { fetchTestResults } = useMbtiStore();
  // useEffect(() => {
  //   fetchTestResults();
  // }, [testResults]);

  if (isLoading) return <div>로딩중</div>;
  if (error) return console.error("로딩중에 에러났음 =>", error);

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
