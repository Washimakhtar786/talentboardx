import express from "express";

import jobRoutes from "./jobRoutes.js";
import authRoutes from "./authRoutes.js";
import applicationRoutes from "./applicationRoutes.js";
import aiRoutes from "./aiRoutes.js";

const router = express.Router();

router.use("/jobs", jobRoutes);
router.use("/auth", authRoutes);
router.use("/applications", applicationRoutes);

// AI Routes
router.use("/ai", aiRoutes);

export default router;