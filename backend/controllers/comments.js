"use strict";

const express = require("express");
const router = express.Router();
const sqlwrapper = require("../model/wrapper");

const send = require("./comments/send");
const requireAuth = require("../middleware/auth/verify");

router.get("/", async function(req, res, next) {
  if (req.body.level == 0) { //0 for whole project
    try {
      const c = req.app.get("databaseConnection");
      const results = await sqlwrapper.getCommentsProject(c, 1);
      res.status(200);
      res.json({ comments: results });
    } catch (err) {
      next(err);
    }
  } else if (req.body.level == 1) { //1 for project component
    try {
      const c = req.app.get("databaseConnection");
      const results = await sqlwrapper.getCommentsComponent(c, req.body.id);
      res.status(200);
      res.json({ comments: results });
    } catch (err) {
      next(err);
    }
  } else if (req.body.level == 2) { //2 for milestone
    try {
      const c = req.app.get("databaseConnection");
      const results = await sqlwrapper.getCommentsMilestone(c, req.body.id);
      res.status(200);
      res.json({ comments: results });
    } catch (err) {
      next(err);
    }
  } else { //3 for task
    try {
      const c = req.app.get("databaseConnection");
      const results = await sqlwrapper.getCommentsTask(c, req.body.id);
      res.status(200);
      res.json({ comments: results });
    } catch (err) {
      next(err);
    }
  }
});

router.use("/send", requireAuth, send);

module.exports = router;
