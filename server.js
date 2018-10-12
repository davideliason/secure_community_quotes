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
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect(uri,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('db connection established');

app.get('/api/quotes',(req,res,next)=> {
	 Quote.find({},(err,quotes)=>{
    res.json(quotes)
   });
});

app.post('/api/quotes',(req,res) => {
  const quote = new Quote();
  const { author, text } = req.body;
  if ( !author || !text) {
    return res.json({
      success: false,
      error: 'You must provide an author and text'
    });
  }
  quote.author = author;
  quote.text = text;
  quote.save(err => {
    if(err) return res.json({success:false, error: err});
    return res.json({success: true});
  });
});

app.put('/api/quotes/:quoteId', (req, res) => {
  var quoteId = req.params.quoteId;
  console.log(quoteId);
  console.log("previous content" + req.body);

  var dbid = "5bbfd6942c5b10001575675c";

  Quote.findById(dbid, (error, quote) => {
    if (error) return res.json({ success: false, error });
    console.log(quote);
    
    const { author, text } = req.body;
    if (author) quote.author = author;
    if (text) quote.text = text;
    quote.save(error => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });

});

app.delete('/api/quotes/:quoteId', (req,res) => {
  var quoteId = req.params.quoteId;
  console.log(quoteId);
  Quote.remove({ _id : quoteId}, (error, quote) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port,()=> {
	console.log(`server at port ${port}`);
});



