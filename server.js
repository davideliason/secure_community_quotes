// dependencies
const express = require('express');
const mongoose = require('mongoose');

//config
const app = express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/user')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

//routes
app.get('/', (req,res)=>{
	res.send("hello world");
});

// server spin up
app.listen(port, ()=>{
	console.log(`port up at ${port}`);
});

