const express = require('express');
const path	= require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const uuid = require('uuid');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();
const port = process.env.PORT || 3001;
const uri = process.env.MLAB;
const app = express();
const Quote = require('./models/quote.js');

// MIDDLEWARE
app.use(morgan('dev'));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

mongoose.connect(uri,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('db connection established');

app.get('/api/quotes',(req,res,next)=> {
	 Quote.find({},(err,quotes)=>{
    res.json(quotes)
   });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port,()=> {
	console.log(`server at port ${port}`);
});



