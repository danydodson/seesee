const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt_decode = require('jwt-decode')

const User = require('../models/user')
// user test route
router.get('/test', (req, res, next) => {
  return res.json({ success: true, msg: 'User test route working !' })
})

// Get auth user
router.get('/me', (req, res, next) => {
  const decoded = jwt_decode(req.cookies.token)
  const userId = decoded.id

  let authUser = User.getUserById(userId)

  res.json({ authUser })
})

// User signup
router.post('/signup', (req, res, next) => {
  var id = mongoose.Types.ObjectId()

  let newUser = new User({
    _id: id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    role: 'user',
    username: req.body.username,
    password: req.body.password
  })


  User.addUser(newUser, (err) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register user', err: err })
    } else {
      const user = newUser.toObject()
      Reflect.deleteProperty(user, 'password')
      console.log(user)
      res.json({ success: true, msg: 'You are registered!', user: user })
    }
  })
})

// User signin
router.post('/signin', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  User.findOne({ username: username }, (err, user) => {
    if (err) throw err
    if (!user) {
      console.log(user)
      return res.json({ success: false, msg: 'User not found' })
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err
      if (isMatch) {
        res.json({ _id: user._id })
      } else {
        return res.json({ success: false, msg: 'Wrong Password' })
      }
    })
  })
})

// User signout
router.post('/signout', (req, res, next) => {
  res.json({ user: req.user })
})

module.exports = router
