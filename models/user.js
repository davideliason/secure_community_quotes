const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const UserSchema = new Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);