const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../config/database')
const User = require('../models/user')

// Get All Users
router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: 'No users found' }))
})

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })

  User.addUser(newUser, (err) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' })
    } else {
      res.json({ success: true, msg: 'You are registered!' })
    }
  })
})

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err
    if (!user) {
      console.log(user)
      return res.json({ success: false, msg: 'User not found' })
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err
      if (isMatch) {
        res.json(user)

        // if (isMatch) {
        //   const token = jwt.sign(user.toJSON(), config.secret, {
        //     expiresIn: 604800 //a week
        //   })
        //   res.json({
        //     success: true,
        //     token: 'JWT ' + token,
        //     iss: 'http://seesee.space',
        //     user: {
        //       id: user._id,
        //       name: user.name,
        //       username: user.username,
        //       email: user.email,
        //       role: user.role
        //     }
        //   })
      } else {
        return res.json({ success: false, msg: 'Wrong Password' })
      }
    })
  })
})

// Get Auth User
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({ user: req.user })
})

// Get User by ID
router.get('/profiles/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  User.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(404).json({ nouserfound: 'No user found with that ID' }))
})

module.exports = router
