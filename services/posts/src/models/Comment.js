import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Comments schema that has reference to Post and User schemas

const CommentSchema = Schema(
  {
    content: {
      type: String,
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

export default mongoose.model('Comment', CommentSchema)
