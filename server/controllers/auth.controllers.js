import { generateToken } from "../lib/utils.js";
import { User } from "../models/model.auth.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).json({ message: "Name is required" });
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
    const newUser = new User({ name, email, password: hashedPassword });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        notification: newUser.notification,
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
        name: user.name,
        email: user.email,
        role: newUser.role,
        notification: newUser.notification,
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

export const check = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
