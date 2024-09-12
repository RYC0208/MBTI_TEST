import { create } from "zustand";
import {
  deleteTestResultApi,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResult";

const useMbtiStore = create((set, get) => ({
  testResults: [],

  fetchTestResults: async () => {
    try {
      const data = await getTestResults();
      const sortedData = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      set({ testResults: sortedData });
    } catch (error) {
      console.log(error);
    }
  },

  deleteTestResult: async (id) => {
    const { testResults } = get();
    try {
      await deleteTestResultApi(id);
      const updatedResults = testResults.filter((result) => result.id !== id);
      set({ testResults: updatedResults });
    } catch (error) {
      console.error(error);
    }
  },

  updateVisibility: async (id, currentVisibility) => {
    const { testResults } = get();
    try {
      const updateResult = await updateTestResultVisibility(
        id,
        !currentVisibility
      );

      set({
        testResults: testResults.map((result) =>
          result.id === id
            ? { ...result, visibility: updateResult.visibility }
            : result
        ),
      });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useMbtiStore;
