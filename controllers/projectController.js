import Project from "../models/Project.js";

// ✅ CREATE PROJECT (ADMIN)
export const createProject = async (req, res) => {
  try {
    const { title, description, members } = req.body;

    const project = await Project.create({
      title,
      description,
      createdBy: req.user._id || req.user.id,
      members: [...(members || []), req.user._id || req.user.id],
    });

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET PROJECTS (FOR LOGGED USER)
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      members: { $in: [req.user._id || req.user.id] },
    })
      .populate("members", "name email")
      .populate("createdBy", "name email");

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};