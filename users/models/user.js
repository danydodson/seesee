const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

// User Schema
const UserSchema = mongoose.Schema({
  _id: { type: {}, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true, default: 'na', },
  role: { type: String, default: 'user', enum: ['user', 'admin', 'super-admin'] },
  confirmed: { type: Boolean, default: false },
})

const User = (module.exports = mongoose.model('User', UserSchema))

module.exports.getAllUsers = (users, callback) => {
  User.find({ users }, callback)
}

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback)
}

module.exports.getUserById = (userId, callback) => {
  const query = { _id: userId }
  User.findOne(query, callback)
}

module.exports.addUser = function (newUser, callback) {
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err
      newUser.password = hash
      newUser.save(callback)
    })
  })
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcryptjs.compare(candidatePassword, hash, (err, isMatch) => {
    callback(null, isMatch)
  })
}
