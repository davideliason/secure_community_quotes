const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//routes
router.get('/', (req,res)=>{
	res.json({ message: 'Hello, World!' });
});

app.use('/api', router);

app.listen(port, ()=>{
	console.log(`server at ${port}`);
});