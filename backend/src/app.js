import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import logger from "./utils/logger.js";
import limiter from "./middlewares/rateLimiter.js";

import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();

/* ===========================
   Security Middleware
=========================== */

app.use(helmet());

/* ===========================
   CORS Configuration
=========================== */

const allowedOrigins = [
  "http://localhost:5173", // React Dev Server
  process.env.FRONTEND_URL, // Production Frontend
].filter(Boolean);



app.use(
  cors({
    origin(origin, callback) {
      // Allow Postman, mobile apps, server-to-server requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS policy does not allow this origin."));
    },

    credentials: true,

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],

    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ===========================
   HTTP Request Logging
=========================== */

app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

/* ===========================
   Body Parser
=========================== */

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* ===========================
   Rate Limiter
=========================== */

app.use("/api/v1", limiter);

app.use("/api/v1/resume", resumeRoutes);

/* ===========================
   Root Health Check
=========================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TalentBoardX Backend is Running 🚀",
  });
});

/* ===========================
   API Routes
=========================== */

app.use("/api/v1", routes);

/* ===========================
   Global Error Handler
=========================== */

app.use(errorHandler);

export default app;