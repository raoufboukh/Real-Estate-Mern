import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    notification: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", user);