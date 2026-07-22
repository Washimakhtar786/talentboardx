import { matchResumeWithJD } from "../services/aiService.js";

export const matchJDResume = async (
  req,
  res,
  next
) => {
  try {
    const report = await matchResumeWithJD(req.body);

    res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    next(error);
  }
};