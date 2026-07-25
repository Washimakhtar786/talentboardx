import express from "express";

import { authenticate, authorize } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";
import { uploadResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post(
  "/upload",
  authenticate,
  authorize("jobseeker"),
  upload.single("resume"),
  uploadResume
);

export default router;