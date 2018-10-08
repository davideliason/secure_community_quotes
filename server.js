const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const path = require('path');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DB_MLAB;

const mongoose = require('mongoose');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;


// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static(path.join(__dirname, 'index.html')));

MongoClient.connect(uri, (err, database) => {
  console.log("mongodb connected");

  db = database.db('secure_community_quotes');

//routes
	app.get('/api/users', function(req, res, next) {
	 db.collection('users').find().toArray( (err,users)=>{
	 	res.json(users);
	 });
  });

});
app.listen(port);