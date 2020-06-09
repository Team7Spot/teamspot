"use strict";

const express = require("express");
const sqlwrapper = require("../../model/wrapper");
const router = express.Router();

router.post("", async (req, res, next) => {
  try {
    const con = req.app.get("databaseConnection");
    const results = await sqlwrapper.sendCommentMilestone(
      con,
      req.body.milestone_id,
      req.body.user_id,
      req.body.user_email,
      req.body.time_stamp,
      req.body.content
    );
    res.status(200);
    res.json({ comments: results });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
