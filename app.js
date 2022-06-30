const express = require("express");
const cors = require("cors");
const tasks = require("./src/routes/tasks/index");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.json({ message: "I am working" }));

app.use("/tasks", tasks);

app.use((req, res, next) => {
  res.status(404).json({ message: "endpoint not supported" });
});

module.exports = app;
