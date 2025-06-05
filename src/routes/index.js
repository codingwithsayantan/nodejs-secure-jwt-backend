const express = require("express");
const userRouter = require("./user");

const router = express.Router();

// Implement route handlers as a middleware
router.use(userRouter);

module.exports = router;
