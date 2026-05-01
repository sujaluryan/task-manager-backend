import Task from "../models/Task.js";
import Notification from "../models/Notification.js";
import { io } from "../server.js";

// ✅ CREATE TASK
export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      project,
      assignedTo,
      priority,
      dueDate,
    } = req.body;

    if (!assignedTo) {
      return res.status(400).json({ msg: "assignedTo is required" });
    }

    const task = await Task.create({
      title,
      description,
      project,
      assignedTo,
      priority,
      dueDate,
      createdBy: req.user.id,
    });

    // 🔔 Save Notification
    await Notification.create({
      user: assignedTo,
      message: "You have been assigned a new task",
    });

    // 🔥 REAL-TIME NOTIFICATION
    io.emit("newTask", {
      message: "New task assigned",
      task,
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET TASKS (WITH PAGINATION)
export const getTasks = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 5;

    const tasks = await Task.find({
      assignedTo: req.user.id,
    })
      .populate("project", "title")
      .populate("assignedTo", "name email")
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ UPDATE TASK STATUS (SECURE)
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ msg: "Task not found" });

    // ✅ Only admin OR assigned user can update
    if (
      req.user.role !== "admin" &&
      task.assignedTo.toString() !== req.user.id
    ) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    Object.assign(task, req.body);
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ DELETE TASK
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    // ✅ Only admin OR creator can delete
    if (
      req.user.role !== "admin" &&
      task.createdBy.toString() !== req.user.id
    ) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    await task.deleteOne();

    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ UPLOAD MULTIPLE FILES
export const uploadFile = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ msg: "Task not found" });

    const filePaths = req.files.map((file) => file.path);

    task.files = [...(task.files || []), ...filePaths];

    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};