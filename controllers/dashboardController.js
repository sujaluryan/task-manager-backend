import Task from "../models/Task.js";

export const getDashboard = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.id });

    const total = tasks.length;

    const completed = tasks.filter(
      (t) => t.status === "completed"
    ).length;

    const pending = tasks.filter(
      (t) => t.status !== "completed"
    ).length;

    const overdue = tasks.filter(
      (t) =>
        t.dueDate &&
        new Date(t.dueDate) < new Date() &&
        t.status !== "completed"
    ).length;

    res.json({
      total,
      completed,
      pending,
      overdue,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};