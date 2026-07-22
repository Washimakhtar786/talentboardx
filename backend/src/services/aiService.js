import axios from "axios";

const AI_BASE_URL =
  process.env.AI_SERVICE_URL || "http://localhost:8000";

export const matchResumeWithJD = async ({
  resume_text,
  jd_text,
}) => {
  const { data } = await axios.post(
    `${AI_BASE_URL}/match-jd-resume`,
    {
      resume_text,
      jd_text,
    }
  );

  return data;
};