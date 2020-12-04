const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Get auth route
router.get('/', (req, res, next) => {
  return res.json({ success: true, msg: 'User / Route' })
})

// Get auth user
router.get('/me', (req, res, next) => {
  res.json({ user: req.user })
})

// User signup
router.post('/signup', (req, res, next) => {
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
      console.log(newUser)
      res.json({ success: true, msg: 'You are registered!' })
    }
  })
})

// User signin
router.post('/signin', (req, res, next) => {
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
