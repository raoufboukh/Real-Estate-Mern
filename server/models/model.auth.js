import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  prop: {
    type: Object,
    ref: "Property",
  },
  date: { type: Date, required: true },
});

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
    favourites: {
      type: Array,
      default: [],
    },
    booking: {
      type: [bookingSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", user);