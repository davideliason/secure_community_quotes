const express = require('express');
const path	= require('path');
const logger = require('morgan');

require('dotenv').config();
const port = process.env.PORT || 3001;
const app = express();

app.get('/',(req,res,next)=>{
	console.log(process.env.TEST);
	res.type('text/plain');
	res.write('hello world');
	res.end();
});

app.listen(port,()=>{
	console.log(`server at port ${port}`);
});



