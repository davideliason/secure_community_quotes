var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_MLAB)
  .then(() =>  console.log('mlab db connection succesful'))
  .catch((err) => console.error(err));