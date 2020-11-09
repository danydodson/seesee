const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'super-admin']
  }
})

const User = (module.exports = mongoose.model('User', UserSchema))

module.exports.getAllUsers = (users, callback) => {
  User.find({ users }, callback)
}

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback)
}

module.exports.getUserByUsername = (username, callback) => {
  const query = { username: username }
  User.findOne(query, callback)
}

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err
      newUser.password = hash
      newUser.save(callback)
    })
  })
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    callback(null, isMatch)
  })
}
