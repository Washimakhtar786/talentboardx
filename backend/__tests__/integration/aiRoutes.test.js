import request from "supertest";
import app from "../../src/app.js";
import * as aiService from "../../src/services/aiService.js";

jest.mock("../../src/services/aiService.js");

describe("POST /api/v1/ai/match-jd-resume", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return AI report", async () => {
    aiService.matchResumeWithJD.mockResolvedValue({
      candidate_status: "Selected",
      match_score: 91,
      recommendation: "Proceed",
    });

    const response = await request(app)
      .post("/api/v1/ai/match-jd-resume")
      .send({
        resume_text: "React Node MongoDB",
        jd_text: "Need MERN Developer",
      });

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      success: true,
      data: {
        candidate_status: "Selected",
        match_score: 91,
        recommendation: "Proceed",
      },
    });
  });

  it("should return error when AI service fails", async () => {
    aiService.matchResumeWithJD.mockRejectedValue(
      new Error("AI service unavailable")
    );

    const response = await request(app)
      .post("/api/v1/ai/match-jd-resume")
      .send({
        resume_text: "Resume",
        jd_text: "JD",
      });

    expect(response.statusCode).toBeGreaterThanOrEqual(500);
  });
});