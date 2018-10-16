const express = require('express');
const path	= require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const uuid = require('uuid');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


require('dotenv').config();
const port = process.env.PORT || 3001;
const uri = process.env.MLAB;
const app = express();
const Quote = require('./models/quote.js');
const FileStore = require('session-file-store')(session);

const users = [
  { id: '25x19', 
    email: 'test@test.com',
    password: 'xyz'
  }
];

// MIDDLEWARE
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    console.log('Inside local strategy callback')
    // next step: DB call to find user based on userman or email
    // right now just using the above hard-coded users values
    // DB.findById() 
    // email and password are what was sent to server via POST request
    // if that data (email, password) matches the data in the DB..
    // then we call the done(error object, user object) method and ..
    // pass in null and the user object returned from the DB
    const user = users[0] 
    if(email === user.email && password === user.password) {
      console.log('Local strategy returned true')
      return done(null, user)
    }
  }
));

passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here')
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('Inside deserializeUser callback')
  console.log(`The user id passport saved in the session file store is: ${id}`)
  const user = users[0].id === id ? users[0] : false; 
  done(null, user);
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'keyboard coffee',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(uri,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('db connection established');

app.post('/addUser', (req,res) => {
  console.log(req.body);
});

app.get('/login', (req, res) => {
  console.log('Inside GET /login callback function')
  console.log(req.sessionID)
  res.send(`You got the login page!\n`)
})

app.get('/authrequired', (req, res) => {
  console.log('Inside GET /authrequired callback')
  console.log(`User authenticated? ${req.isAuthenticated()}`)
  if(req.isAuthenticated()) {
    res.send('you hit the authentication endpoint\n')
  } else {
    res.redirect('/')
  }
})

app.post('/login', (req, res, next) => {
  console.log('Inside POST /login callback')
  passport.authenticate('local', (err, user, info) => {
    console.log('Inside passport.authenticate() callback');
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
    console.log(`req.user: ${JSON.stringify(req.user)}`)
    req.login(user, (err) => {
      if (err) { return next(err); }
      return res.redirect('/authrequired');
    })
  })(req, res, next);
})


app.get('/api/quotes',(req,res,next)=> {
  console.log(req.sessionID);
	 Quote.find({},(err,quotes)=>{
    res.json(quotes)
   });
});

app.post('/api/quotes',(req,res) => {
  const quote = new Quote();
  const { author, text } = req.body;
  if ( !author || !text) {
    return res.json({
      success: false,
      error: 'You must provide an author and text'
    });
  }
  quote.author = author;
  quote.text = text;
  quote.save(err => {
    if(err) return res.json({success:false, error: err});
    return res.json({success: true});
  });
});

app.put('/api/quotes/:dbid', (req, res) => {
  console.log(req.params);
  var dbid = req.params.dbid;
  console.log(dbid);
  console.log("previous content" + req.body);


  Quote.findById(dbid, (error, quote) => {
    if (error) return res.json({ success: false, error });
    console.log(quote);
    
    const { author, text } = req.body;
    if (author) quote.author = author;
    if (text) quote.text = text;
    quote.save(error => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });

});

// DELETE
app.delete('/api/quotes/:quoteId', (req,res) => {
  var quoteId = req.params.quoteId;
  console.log(quoteId);
  Quote.remove({ _id : quoteId}, (error, quote) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port,()=> {
	console.log(`server at port ${port}`);
});



