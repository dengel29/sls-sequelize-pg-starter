'use strict';
const db = require('./connection.js');
const serverless = require('serverless-http');

const express = require('express');
const app = express();

app.get('/test', async function (req, res) {
  let msg;
  try {
    // await db.authenticate();
    // msg = 'Connection successful'
    console.log(process.env)
    msg = process.env.DB_HOST
  } catch (error) {
    msg = 'Unable to connect to the database:'
    console.error('Unable to connect to the database:', error);
  }

  return res.send(msg)
})

module.exports.index = serverless(app)