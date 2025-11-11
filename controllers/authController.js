const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const {name, email, password} = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({name, email, password: hashed});
  res.json({message: "User Registered"});
};

exports.login = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (!user) return res.json({message: "User not found"});

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({message: "Incorrect password"});

  const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
  res.json({message: "Login Successful", token});
};