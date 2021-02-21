const express = require("express");
const db = require("./projectsModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error finding projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: "Error finding project with this ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error finding projects" });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;
  db.add(newProject)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding project" });
    });
});

module.exports = router;
