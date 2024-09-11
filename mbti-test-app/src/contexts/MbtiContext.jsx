import { createContext, useState, useEffect } from "react";
import React from "react";
import {
  getTestResults,
  deleteTestResultApi,
  updateTestResultVisibility,
} from "../api/testResult";

export const MbtiContext = createContext();

export const MbtiProvider = ({ children }) => {
  const [testResults, setTestResults] = useState([]);

  const fetchTestResults = async () => {
    try {
      const data = await getTestResults();
      const sortedData = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setTestResults(sortedData);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTestResult = async (id) => {
    try {
      await deleteTestResultApi(id);
      const updatedResults = testResults.filter((result) => result.id !== id);
      setTestResults(updatedResults);
    } catch (err) {
      console.error(err);
    }
  };

  const updateVisibility = async (id, currentVisibility) => {
    try {
      const updatedResult = await updateTestResultVisibility(
        id,
        !currentVisibility
      );
      setTestResults((prevResults) =>
        prevResults.map((result) =>
          result.id === id
            ? { ...result, visibility: updatedResult.visibility }
            : result
        )
      );
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchTestResults();
  }, [testResults]);

  return (
    <MbtiContext.Provider
      value={{ testResults, deleteTestResult, updateVisibility }}
    >
      {children}
    </MbtiContext.Provider>
  );
};
