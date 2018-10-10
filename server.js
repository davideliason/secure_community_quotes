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

app.get('/',(req,res,next)=>{
	console.log(process.env.TEST + uuid());
	res.type('text/plain');
	res.write('hello world');
	res.end();
});

app.listen(port,()=>{
	console.log(`server at port ${port}`);
});



