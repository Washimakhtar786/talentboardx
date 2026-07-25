import * as resumeService from "../services/resumeService.js";

export const uploadResume = async (req, res, next) => {
  try {
    const result = await resumeService.uploadResume(
      req.file,
      req.user
    );

    res.status(200).json({
      success: true,
      message: "Resume uploaded successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};