import jwt from "jsonwebtoken";

export const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "developement",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });
  return token;
};
