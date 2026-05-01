import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  uploadFile, // 👈 ADD THIS
} from "../controllers/taskController.js";

import { upload } from "../middleware/upload.js"; // 👈 ADD THIS

const router = express.Router();

router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

// 📎 FILE UPLOAD ROUTE
router.post("/:id/upload", protect, upload.single("file"), uploadFile);

export default router;