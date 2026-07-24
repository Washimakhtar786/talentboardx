import API from "./api";

export const matchResumeWithJD = async (payload) => {
  const response = await API.post("ai/match-jd-resume", payload);

  return response.data;
};