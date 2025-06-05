const mongoose = require("mongoose");

const CONSTANTS = require("../config/consts");

const connectDB = async () => {
  try {
    await mongoose.connect(CONSTANTS.DB.DB_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
