"use strict";

const express = require("express");
const router = express.Router();
const sqlwrapper = require("../model/wrapper");

const assign = require("./tasks/assign");
const complete = require("./tasks/complete");
const create = require("./tasks/create");
const del = require("./tasks/delete");
const update = require("./tasks/update");
const requireAuth = require("../middleware/auth/verify");
const get = require("./tasks/getComments");
const send = require("./tasks/addComment");
const getEmojis = require("./tasks/getEmojis");
const reaction = require("./tasks/reaction");
const id = require("./tasks/id");

router.get("/", async (req, res, next) => {
  try {
    const c = req.app.get("databaseConnection");
    const results = await sqlwrapper.getTasks(c);
    res.status(200);
    res.json({ tasks: results });
  } catch (err) {
    next(err);
  }
});

router.use("/assign", requireAuth, assign);
router.use("/create", requireAuth, create);
router.use("/complete", requireAuth, complete);
router.use("/delete", requireAuth, del);
router.use("/update", requireAuth, update);
router.use("/sendComment", requireAuth, send);
router.use("/getComments", requireAuth, get)
router.use("/getReactions", requireAuth, getEmojis);
router.use("/addReaction", requireAuth, reaction);
router.use("/id", id);

module.exports = router;
