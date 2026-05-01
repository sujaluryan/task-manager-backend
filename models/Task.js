import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },

    // 🔥 NEW FIELD
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    // 🔥 NEW FIELD
    dueDate: {
      type: Date,
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // 🔥 MULTIPLE FILES
    files: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);