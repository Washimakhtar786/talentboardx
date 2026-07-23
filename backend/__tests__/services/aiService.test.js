import axios from "axios";
import { matchResumeWithJD } from "../../src/services/aiService.js";

jest.mock("axios");

describe("AI Service", () => {
  it("should call AI microservice and return response", async () => {
    const fakeResponse = {
      match_score: 90,
      recommendation: "Selected",
    };

    axios.post.mockResolvedValue({
      data: fakeResponse,
    });

    const payload = {
      resume_text: "React Node MongoDB",
      jd_text: "Need MERN Developer",
    };

    const result = await matchResumeWithJD(payload);

    expect(axios.post).toHaveBeenCalledWith(
      expect.stringContaining("/match-jd-resume"),
      payload
    );

    expect(result).toEqual(fakeResponse);
  });

  it("should throw error if AI service fails", async () => {
    axios.post.mockRejectedValue(
      new Error("AI service unavailable")
    );

    await expect(
      matchResumeWithJD({
        resume_text: "resume",
        jd_text: "jd",
      })
    ).rejects.toThrow("AI service unavailable");
  });
});