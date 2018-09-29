
const express = require('express')
const port = process.env.PORT || 3000
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

// MIDDLEWARE
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/quotes', (req, res) => res.json([{'name' : 'David'}]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

