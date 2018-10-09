const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;
const uri = process.env.DB_MLAB;

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//db
mongoose.connect(uri, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('server connected to db');

//routes
router.get('/', (req,res)=>{
	res.json({ message: 'Hello, World!' });
});

app.use('/api', router);

app.listen(port, ()=>{
	console.log(`server at port ${port}`);
});