import jwt from "jsonwebtoken";
import { User } from "../models/model.auth.js";

export const ProtectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({ message: "Unauthorized - No token" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res
        .status(401)
        .json({ message: "Unauthorized - Token verification failed" });
    const user = await User.findById(decoded.id);
    if (!user)
      return res.status(401).json({ message: "Unauthorized - No user found" });
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
