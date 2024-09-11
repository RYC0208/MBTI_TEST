import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResult";

export const useTestResults = () => {
  return useQuery({
    queryKey: ["testResults"],
    queryFn: async () => {
      const data = await getTestResults();
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  });
};
