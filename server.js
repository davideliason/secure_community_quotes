const express = require('express');
const path	= require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const uuid = require('uuid');

require('dotenv').config();
const port = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(morgan('dev'));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/quotes',(req,res,next)=> {
	 res.json([{
  		id: uuid(),
  		author: "David",
  		text: "coffee"
  		}, {
  		id: uuid(),
  		author: "John",
  		text:"coffee too"
  }]);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port,()=> {
	console.log(`server at port ${port}`);
});



