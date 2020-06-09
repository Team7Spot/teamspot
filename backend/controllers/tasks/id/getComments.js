"use strict";

const express = require("express");
const router = express.Router();
const sqlwrapper = require("../../../model/wrapper");

router.get("/", async function(req, res, next) {
  try {
    const c = req.app.get("databaseConnection");
    const results = await sqlwrapper.getCommentsTask(c, req.headers.taskid);
    res.status(200);
    res.json({ comments: results });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

//name, comment, date, id
