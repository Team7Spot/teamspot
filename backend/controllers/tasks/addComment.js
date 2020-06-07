"use strict";

const express = require("express");
const sqlwrapper = require("../../model/wrapper");
const router = express.Router();

router.post("", async (req, res, next) => {
  try {
    const c = req.app.get("databaseConnection");
    const results = await sqlwrapper.sendCommentTask(c, req.body.id, req.body.name, req.body.comment, req.body.date);
    res.status(200);
    res.json({ comments: results });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
