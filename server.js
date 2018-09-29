
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const uri = process.env.DB_MLAB


// MIDDLEWARE
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client/build')));

// API ENDPOINT
MongoClient.connect(uri, (err,db)=>{
  console.log('db connected')
  app.get('/api/quotes', (req, res) => res.json([{'name' : 'David'}]))

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

