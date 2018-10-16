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

UserSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js  NO PASSWORD PROVIDED')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})
module.exports = mongoose.model('User', UserSchema);