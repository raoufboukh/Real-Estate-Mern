import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  prop: {
    type: Object,
    ref: "Property",
  },
  date: { type: Date, required: true },
});

const NotificationSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  property: {
    type: Object,
  },
  userId: {
    type: String,
  },
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
      type: [NotificationSchema],
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