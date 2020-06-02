"use strict";

const express = require("express");
const sqlwrapper = require("../../model/wrapper");
const router = express.Router();

//`{comment: ${req.body.comment}, username: ${req.body.username}},`

router.post("", async (req, res, next) => {
  if (req.body.level == 0) { //0 for whole project
    try {
      const c = req.app.get("databaseConnection");
      const results = await sqlwrapper.sendCommentProject(c, req.body.comment, 1);
      res.status(200);
      res.json({ comments: results });
    } catch (err) {
      next(err);
    }
  } else if (req.body.level == 1) { //1 for project component
    try {
      const c = req.app.get("databaseConnection");
      const results = await sqlwrapper.sendCommentComponent(c, req.body.comment, req.body.id);
      res.status(200);
      res.json({ comments: results });
    } catch (err) {
      next(err);
    }
  } else if (req.body.level == 2) { //2 for milestone
    try {
      const c = req.app.get("databaseConnection");
      const results = await sqlwrapper.sendCommentMilestone(c, req.body.comment, req.body.id);
      res.status(200);
      res.json({ comments: results });
    } catch (err) {
      next(err);
    }
  } else { //3 for task
    try {
      const c = req.app.get("databaseConnection");
      const results = await sqlwrapper.sendCommentTask(c, req.body.comment, req.body.id);
      res.status(200);
      res.json({ comments: results });
    } catch (err) {
      next(err);
    }
  }
});

module.exports = router;
