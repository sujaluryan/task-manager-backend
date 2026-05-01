import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getDashboard } from "../controllers/dashboardController.js";

const router = express.Router();

// ✅ FIXED ROUTE
router.get("/", protect, getDashboard);

export default router;