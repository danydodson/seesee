
const mongoose = require('mongoose')

//Post Schema
const PostSchema = mongoose.Schema({
  title: {
    type: String
  },
  desc: {
    type: String,
    required: true
  }
})

const Post = (module.exports = mongoose.model('Post', PostSchema))

module.exports.addPost = function (newPost, callback) {
  newPost.save(callback)
}
