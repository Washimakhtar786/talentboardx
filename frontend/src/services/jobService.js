import API from "./api";

export const fetchJobs = async () => {
  const response = await API.get("/jobs");

  return response.data.data;
};