import { jest, describe, it, expect, afterEach } from "@jest/globals";

// Mock service BEFORE importing controller
const mockGetJobById = jest.fn();

jest.unstable_mockModule("../../src/services/jobService.js", () => ({
  getJobById: mockGetJobById,
}));

// Import controller AFTER mock
const { getJobById } = await import(
  "../../src/controllers/jobController.js"
);

describe("Job Controller - getJobById", () => {
  const mockReq = {
    params: {
      id: "123",
    },
  };

  const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const mockNext = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 and job data if found", async () => {
    const mockJob = {
      id: "123",
      title: "React Developer",
    };

    mockGetJobById.mockResolvedValue(mockJob);

    await getJobById(mockReq, mockRes, mockNext);

    expect(mockGetJobById).toHaveBeenCalledWith("123");

    expect(mockRes.status).toHaveBeenCalledWith(200);

    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      data: mockJob,
    });
  });

  it("should call next with 404 error if job is not found", async () => {
    const error = new Error("Job not found");
    error.status = 404;

    mockGetJobById.mockRejectedValue(error);

    await getJobById(mockReq, mockRes, mockNext);

    expect(mockGetJobById).toHaveBeenCalledWith("123");

    expect(mockNext).toHaveBeenCalledWith(error);

    expect(mockRes.status).not.toHaveBeenCalled();

    expect(mockRes.json).not.toHaveBeenCalled();
  });

  it("should call next with error if service throws", async () => {
    const mockError = new Error("Database Error");

    mockGetJobById.mockRejectedValue(mockError);

    await getJobById(mockReq, mockRes, mockNext);

    expect(mockGetJobById).toHaveBeenCalledWith("123");

    expect(mockNext).toHaveBeenCalledWith(mockError);

    expect(mockRes.status).not.toHaveBeenCalled();

    expect(mockRes.json).not.toHaveBeenCalled();
  });
});