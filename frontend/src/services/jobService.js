import API from "./api";

export const fetchJobs = async () => {
  const response = await API.get("/api/v1/jobs");

  return response.data.data;
};