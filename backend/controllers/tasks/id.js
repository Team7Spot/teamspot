"use strict";

const express = require("express");
const router = express.Router();

const sqlwrapper = require("../../model/wrapper");
const getComments = require("./id/getComments")

router.get("/:id", async function(req, res, next) {
  try {
    const c = req.app.get("databaseConnection");
    const task = await sqlwrapper.getTask(c, req.params.id);
    res.status(200);
    res.json({ task: task });
  } catch (err) {
    next(err);
  }
});

router.use("/:id", (req, res, next) => {
  req.headers.taskid = req.params.id;
  next();
});

router.use("/:id/getComments", getComments)

module.exports = router;
