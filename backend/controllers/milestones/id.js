"use strict";

const express = require("express");
const router = express.Router();

const sqlwrapper = require("../../model/wrapper");
const getComments = require("./id/getComments")

router.get("/:id", async function(req, res, next) {
  try {
    const c = req.app.get("databaseConnection");
    const milestone = await sqlwrapper.getMilestone(c, req.params.id);
    res.status(200);
    res.json({ milestone: milestone });
  } catch (err) {
    next(err);
  }
});

router.use("/:id", (req, res, next) => {
  req.headers.milestoneid = req.params.id;
  next();
});

router.use("/getComments", getComments);

module.exports = router;
