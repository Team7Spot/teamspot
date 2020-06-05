"use strict";

const express = require("express");
const mysql = require("mysql");

const config = require("../config");
const sqlwrapper = require("../model/wrapper");

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  schema: 'teamspot'
})
//con.connect()

test('get comments from a task with no comments', () => {
  expect(sqlwrapper.getTasks(con)).toBe("")
})
