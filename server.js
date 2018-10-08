const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DB_MLAB;

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();


// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'client/build')));

//routes
app.get('/', (req,res)=>{
	console.log(process.env.TEST)
	res.send('home route');
});

app.listen(port);