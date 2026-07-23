import express from "express";

import jobRoutes from "./jobRoutes.js";
import authRoutes from "./authRoutes.js";
import applicationRoutes from "./applicationRoutes.js";
import aiRoutes from "./aiRoutes.js";

const router = express.Router();

/* Health Check */
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "TalentBoardX Backend",
    status: "Healthy",
    timestamp: new Date().toISOString(),
  });
});

router.use("/jobs", jobRoutes);
router.use("/auth", authRoutes);
router.use("/applications", applicationRoutes);
router.use("/ai", aiRoutes);

export default router;