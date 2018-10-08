const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


require('dotenv').config();
mongoose.Promise = global.Promise;
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DB_MLAB;
var users = require('./routes/users');

mongoose.connect('mongodb://localhost/user')
  .then(() =>  console.log('db connection succesful'))
  .catch((err) => console.error(err));
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/users', users);
app.get('*', (req, res) => {
       res.sendFile(path.join(__dirname+'/client/build/index.html'));
     });




app.listen(port, ()=>{
	console.log(`server at ${port}`);
});