import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, password: hashedPassword });
  await user.save();
  res.json({ message: "User registered successfully" });
};

export const loginUser = async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true });
  res.json({ message: "Login successful", name: user.name, loginTime: new Date() });
};

export const profile = (req, res) => {
  res.json({ user: req.user });
};

export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
