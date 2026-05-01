import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  try {
    const { text } = req.body;

    const comment = await Comment.create({
      task: req.params.taskId,
      user: req.user.id,
      text,
    });

    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ task: req.params.taskId })
      .populate("user", "name email");

    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};