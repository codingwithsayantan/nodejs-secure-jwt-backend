const express = require("express");

const router = require("../src/routes/index");

const app = express();
const PORT = 6500;

app.use(express.json());

// Add main router to the middleware
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
