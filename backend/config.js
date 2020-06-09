"use strict";

module.exports = {
  serverConfig: {
    env: process.env.ENV || "development",
    port: process.env.PORT || "8080"
  },
  authConfig: {
    authKey: process.env.AUTH_EC_KEY || "testsecret",
    expiresIn: process.env.AUTH_EXP || "15m",
    googleAuthClientId: process.env.AUTH_GOOGLE_CLIENT_ID
  },
  databaseConfig: {
    host: "us-cdbr-east-05.cleardb.net",
    username: "b0b8f4e06a1d5d",
    password: "9b04dc75",
    schema: "heroku_1a9791c63e5f3f1"
  }
};
