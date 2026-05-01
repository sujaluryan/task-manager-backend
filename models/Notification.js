import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);