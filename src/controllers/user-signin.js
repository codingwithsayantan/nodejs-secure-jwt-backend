const { handleResponse } = require("../helpers/handle-response");
const connectDB = require("../db/mongoose");
const User = require("../models/user.model");

const userSignin = async (req, res) => {
  const { body } = req;

  await connectDB();

  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });
  console.log("User: ", user);

  return handleResponse(res, 201, user ? "User matched!" : "No user found!", {
    user,
  });
};

module.exports = { userSignin };
