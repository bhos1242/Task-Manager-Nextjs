import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  addedDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "complete", "just_added"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", taskSchema);
