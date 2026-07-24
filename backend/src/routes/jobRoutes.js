import express from "express";

import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

import {
  authenticate,
  authorize,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

/* ===========================
   Public Routes
=========================== */

router.get("/", getAllJobs);

router.get("/:id", getJobById);

/* ===========================
   Employer Routes
=========================== */

router.post(
  "/",
  authenticate,
  authorize("employer", "admin"),
  createJob
);

router.put(
  "/:id",
  authenticate,
  authorize("employer", "admin"),
  updateJob
);

/* ===========================
   Admin Only
=========================== */

router.delete(
  "/:id",
  authenticate,
  authorize("employer","admin"),
  deleteJob
);

export default router;