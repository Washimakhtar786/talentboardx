import { matchJDResume } from "../../src/controllers/aiController.js";
import * as aiService from "../../src/services/aiService.js";

jest.mock("../../src/services/aiService.js");

describe("AI Controller", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      body: {
        resume_text: "Resume",
        jd_text: "Job Description",
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    next = jest.fn();
  });

  it("should return AI report", async () => {
    const fakeReport = {
      match_score: 95,
    };

    aiService.matchResumeWithJD.mockResolvedValue(fakeReport);

    await matchJDResume(req, res, next);

    expect(aiService.matchResumeWithJD)
      .toHaveBeenCalledWith(req.body);

    expect(res.status)
      .toHaveBeenCalledWith(200);

    expect(res.json)
      .toHaveBeenCalledWith({
        success: true,
        data: fakeReport,
      });
  });

  it("should call next on error", async () => {
    const error = new Error("Server Error");

    aiService.matchResumeWithJD.mockRejectedValue(error);

    await matchJDResume(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});