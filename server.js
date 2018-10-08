const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DB_MLAB;

const mongoose = require('mongoose');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();


// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static(path.join(__dirname, 'index.html')));

MongoClient.connect(uri, { useNewUrlParser: true }, (err, database) => {
  console.log("mongodb connected");
//routes
	app.get('/users', function(req, res, next) {
	  res.json([{
	  	id: 1,
	  	username: "user1"
	  }, {
	  	id: 2,
	  	username: "user2"
    }]);
  });

});
app.listen(port);