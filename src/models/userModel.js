import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, // Corrected typo from "require" to "required"
  },
  about: String,
  profileUrl: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
