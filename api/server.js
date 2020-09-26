const express = require("express");
const server = express();
const projectsRouter = require("../projects/projectsRouter");
const resourcesRouter = require("../resources/resourcesRouter");
const tasksRouter = require("../tasks/tasksRouter");

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.send({ message: "The server is up and running!" });
});

module.exports = server;
