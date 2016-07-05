var express = require('express'),
  mongodb = require('mongodb'),
  app = express(),
  bodyParser = require('body-parser'),
  validator = require('express-validator'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),
  compression = require('compression'),
  url = 'mongodb://localhost:27017/board';

  mongodb.MongoClient.connect(url, function(err, db) {
  if (err) {
    console.error(err);
    process.exit(1);
  });