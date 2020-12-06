const express = require('express')
const router = express.Router()

const Post = require('../models/posts')

// Get Posts
router.get('/', (req, res) => {
  res.send('Nothing to see here <br> for now... (posts-api) <br>')
})

// Get Post
router.get('/:id', (req, res, next) => {
  const found = Post.findOne({ id: req.params.id })
  res.json({ post: found })
})

// New Post
router.post('/', (req, res, next) => {
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

// Edit Post
router.put('/:id', (req, res, next) => {
  let upPost = new Post({
    title: req.body.title,
    desc: req.body.desc
  })

  res.json({ user: upPost })
})

// Delete Post
router.delete('/:id', (req, res, next) => {
  res.json({ success: true, msg: 'Delete post route working!' })
})

module.exports = router
