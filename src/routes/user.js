const express = require("express");

const { userSignup } = require("../controllers/user-signup");
const { getUsers } = require("../controllers/user-list");
const { userSignin } = require("../controllers/user-signin");

const userRouter = express.Router();

userRouter.get("/users", getUsers);

userRouter.post("/users/signup", userSignup);

userRouter.post("/users/signin", userSignin);

module.exports = userRouter;
