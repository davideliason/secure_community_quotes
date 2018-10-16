const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const UserSchema = new Schema({
  username: String,
  password: String
});

UserSchema.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password)
},
  hashPassword: plainTextPassword => {
  return bcrypt.hashSync(plainTextPassword, 10)
  }
}

module.exports = mongoose.model('User', UserSchema);