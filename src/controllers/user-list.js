const { handleResponse } = require("../helpers/handle-response");
const connectDB = require("../db/mongoose");
const User = require("../models/user.model");

const getUsers = async (req, res) => {
  await connectDB();

  const users = await User.find();
  console.log("Users: ", users);

  return handleResponse(res, 201, "User Created!", { users });
};

module.exports = { getUsers };
