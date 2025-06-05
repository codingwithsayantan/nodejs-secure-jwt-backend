const { handleResponse } = require("../helpers/handle-response");
const connectDB = require("../db/mongoose");
const User = require("../models/user.model");

const userSignup = async (req, res) => {
  const { body } = req;

  await connectDB();

  const newUser = new User({
    name: body?.name || "",
    email: body?.email || "",
    password: body?.password || "",
  });

  await newUser.save();
  console.log("User saved:", newUser);

  return handleResponse(res, 201, "User Created!");
};

module.exports = { userSignup };
