const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req,res)=>{
	res.send('hello world');
});

app.listen(port, () => {
	console.log(`server listening at port ${port}`);
});

