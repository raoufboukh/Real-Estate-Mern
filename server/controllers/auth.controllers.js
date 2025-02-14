import { generateToken } from "../lib/utils.js";
import { User } from "../models/model.auth.js";
import bcrypt from "bcrypt";
import cloudinary from "../lib/cloudinary.js";

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        email: newUser.email,
        role: newUser.role,
        notification: newUser.notification,
        favourites: newUser.favourites,
        booking: newUser.booking,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email doesn't exist" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      generateToken(user._id, res);
      res.status(200).json({
        _id: user._id,
        email: user.email,
        role: user.role,
        notification: user.notification,
        favourites: user.favourites,
        booking: user.booking,
      });
    } else {
      res.status(400).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signOut = (req, res) => {
  try {
    res.cookie("token", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Signout success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const addFavourites = async (req, res) => {
  try {
    const id = req.user._id;
    const favourite = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { $push: { favourites: favourite } },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const removeFavourites = async (req, res) => {
  try {
    const id = req.user._id;
    const favId = req.params.id;
    const user = await User.findByIdAndUpdate(
      id,
      { $pull: { favourites: { _id: favId } } },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addBooking = async (req, res) => {
  try {
    const id = req.user._id;
    const booking = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { $push: { booking: booking } },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeBooking = async (req, res) => {
  try {
    const id = req.user._id;
    const bookId = req.params.id;
    const user = await User.findByIdAndUpdate(
      id,
      { $pull: { booking: { _id: bookId } } },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const check = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
