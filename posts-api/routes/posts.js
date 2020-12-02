const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../config/database')
const Post = require('../models/posts')

// Get Posts
router.get('/', (req, res) => {
  res.send('Nothing to see here <br> for now... (posts-api) <br>')
})

//New Post
router.post('/create', (req, res, next) => {
  let newPost = new Post({
    title: req.body.title,
    desc: req.body.desc
  })

  Post.addPost(newPost, (err) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to create post' })
    } else {
      res.json({ success: true, msg: 'New post was created!' })
    }
  })
})

// Get Post
router.get('/:id', (req, res, next) => {
  const found = Post.findOne({ id: req.params.id })
  res.json({ post: found })
})

// Edit Post
/** move auth to gateway-proxy routes. */
router.put('/:id', (req, res, next) => {
  let upPost = new Post({
    title: req.body.title,
    desc: req.body.desc
  })

  res.json({ user: upPost })
})

module.exports = router
