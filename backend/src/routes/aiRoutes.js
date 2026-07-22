import { Router } from "express";

import { matchJDResume } from "../controllers/aiController.js";

const router = Router();

router.post(
  "/match-jd-resume",
  matchJDResume
);

export default router;