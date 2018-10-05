
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')

const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');

const uuid = require('uuid')
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
const uri = process.env.DB_MLAB

// MIDDLEWARE
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/build')));

// ROUTES


app.get('/uuid', (req,res)=>{
  const uniqueId= uuid();
  console.log(uniqueId + " is uniqueId");
  res.send(`here is unique id: ${uniqueId}`);
})

  // app.get('/api/quotes', (req,res,next) => {
  //   db.collection('quotes').find().toArray((err,quotes)=>{
  //     console.log("sent");
  //     console.log(res);
  //     console.log("here is sessionId: " + req.sessionID)
  //     res.json(quotes);
  //   });
  // });

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})
// // configure passport local strategy
// passport.use(new LocalStrategy(
//   { usernameField: 'email' },
//   (email, password, done) => {
//     console.log('Inside local strategy callback')
//     // here is where you make a call to the database
//     // to find the user based on their username or email address
//     // for now, we'll just pretend we found that it was users[0]
//     const user = users[0] 
//     // email and password are values from POSTed input form
//     if(email === user.email && password === user.password) {
//       console.log('Local strategy returned true')
//       return done(null, user)
//     }
//   }
// ));

// passport.serializeUser((user, done) => {
//   console.log('Inside serializeUser callback; userID saved to store file')
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   console.log('Inside deserializeUser callback')
//   console.log(`The user id passport saved in the session file store is: ${id}`)
//   const user = users[0].id === id ? users[0] : false; 
//   done(null, user);
// });

// passport.deserializeUser((id, done) => {
//  MongoClient.connect(uri, (err,database)=>{
//   console.log('database connected' + id);
//   db = database.db('secure_community_quotes')
//     db.collection('users').find({_id : id}, function(err,result){
//       if(err) throw err;
//       console.log("here is the result : " + result.password);
//     });

//   });
// });


// const users = [
//   {id: 'itismedavid', email: 'test@test.com', password: 'password'}
// ]

// requires the model with Passport-Local Mongoose plugged in
// const User = require('./models/user');
 
// USE "createStrategy" INSTEAD OF "authenticate"
// This uses and configures passport-local behind the scenes
// passport.use(User.createStrategy());
 
// use static serialize and deserialize of model for passport session support
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());




// app.use(session({
//   genid: (req) => {
//     console.log('Inside the session middleware')
//     console.log("here is sessionId :" + req.sessionID)
//     return uuid() // use UUIDs for session IDs
//   },
//   store: new FileStore(),
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: false
// }))
// // passport called after configured above
// app.use(passport.initialize());
// app.use(passport.session());




// API ENDPOINT
// MongoClient.connect(uri, (err,database)=>{
  // console.log('database connected')
  // db = database.db('secure_community_quotes')

  // app.get('/', (req,res)=> {
  //   console.log(req.sessionID);
  //   console.log("here is session: " + req.session);
  //   if(req.session.numbers){
  //     req.session.numbers++;
  //     res.setHeader('Content-Type', 'text/html');
  //     res.write('<p>views: ' + req.session.numbers + '</p>');
  //     res.end();
  //   }
  //   else{
  //     req.session.numbers = 1;
  //     res.end('Use of session');
  //   }
  // });

  // app.get('/login', (req, res) => {
  //   console.log('Inside GET /login callback function')
  //   console.log(req.sessionID);
  //   console.log(req.session.numbers);
  //   res.send(`You got the login page!\n`)
  // });

  // app.post('/login', (req, res, next) => {
//     console.log('Inside POST /login callback')
//     passport.authenticate('local', (err, user, info) => {
//       console.log('Inside passport.authenticate() callback');
//       console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
//     console.log(`req.user: ${JSON.stringify(req.user)}`)
//     req.login(user, (err) => {
//       console.log('Inside req.login() callback')
//       console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
//       console.log(`req.user: ${JSON.stringify(req.user)}`)
//       return res.send('You were authenticated & logged in!\n');
//     })
//   })(req, res, next);
// })

// app.post('/login', passport.authenticate('LocalStrategy', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login'
// }));


  // app.post('/signup', (req,res)=>{
  //   console.log("signup form submitted");
  //   db.collection('users').insertOne(
  //   {
  //       "_id" : req.body.email + req.body.password,
  //       "email" : req.body.email,
  //       "password" : req.body.password
  //   });
  // });


  // app.post('/newQuote', (req,res) => {
  //   db.collection('quotes').insertOne(
  //     {
  //      "_id" : req.body.name + req.body.quote,
  //      "name" : req.body.name,
  //      "quote" : req.body.quote
  //      });

  //   console.log("new quote posted" + req.body.name);
  //   res.send('name added successfully');
  // });


  // app.get('/api/quotes', (req,res,next) => {
  // 	db.collection('quotes').find().toArray((err,quotes)=>{
  //     console.log("sent");
  //     console.log(res);
  //     console.log("here is sessionId: " + req.sessionID)
  // 		res.json(quotes);
  // 	});
  // });

//   app.get('/authrequired', (req, res) => {
//   console.log('Inside GET /authrequired callback')
//   console.log(`User authenticated? ${req.isAuthenticated()}`)
//   if(req.isAuthenticated()) {
//     res.send('super secret site via authentication endpoint\n')
//   } else {
//     res.redirect('/')
//   }
// })


  	
// });

app.listen(port, () => console.log(` app listening on port ${port}!`))

