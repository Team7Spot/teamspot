"use strict";

const request = require("supertest");
const express = require("express");
const mysql = require("mysql");

const config = require("../config");
const sqlwrapper = require("../model/wrapper");
const connection = require("../model/connect");
const comments = require("./comments");

const app = express();
app.use(express.json());
const databaseConfig = {
  host: config.databaseConfig.host,
  username: config.databaseConfig.username,
  password: config.databaseConfig.password,
  schema: "teamspot"
};

app.set("authConfig", authConfig);
app.set("serverConfig", config.serverConfig);
app.set("databaseConfig", databaseConfig);

function mockErrorHandler(err, req, res, next) {
  if (err && err.status) {
    res.status(err.status);
    res.json({ status: err.status, message: err.message });
  } else {
    res.status(500);
    res.json({ status: 500, message: "something unexpected happened" });
  }
}

app.use("/comments", comments);
app.use(mockErrorHandler);
