"use strict";

const express = require("express");
const sqlwrapper = require("../../model/wrapper");
const router = express.Router();

router.post("", async (req, res, next) => {
  if (!req.body.id || !req.body.emojis) {
    const err = new Error("Malformed Request");
    err.status = 400;
    next(err);
    return;
  } try {
    const con = req.app.get("databaseConnection");
    const rows = await sqlwrapper.taskReaction(con, req.body.id, JSON.stringify(req.body.emojis));
    res.status(200);
    res.json({emojis: rows.emoji})
  } catch (err) {
    err.status = 500;
    next(err);
  }
});

module.exports = router;
