const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req,res)=>{
	res.send('hello home route');
});

app.listen(port, ()=>{
	console.log(`server at ${port}`);
});