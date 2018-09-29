
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const uuid = require('uuid');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
const uri = process.env.DB_MLAB


// MIDDLEWARE
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client/build')));

// API ENDPOINT
MongoClient.connect(uri, (err,database)=>{
  console.log('database connected')
  db = database.db('secure_community_quotes')

  app.get('/api/quotes', (req,res,next) => {
  	db.collection('quotes').find().toArray((err,quotes)=>{
      console.log("sent");
  		res.json(quotes);
  	});
  });

  app.get('/uuid', (req,res)=>{
    const uniqueId= uuid();
    res.send(`here is unique id: ${uniqueId}`);
  })

  app.get('*', (req,res)=>{
  	res.sendFile(path.join(__dirname+'/client/build/index.html'));
  })
  	
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

