import mongoose from 'mongoose'
import { uuid } from 'uuidv4'

const Schema = mongoose.Schema

const PostSchema = Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    images: {
      thumb: { type: String },
      medium: { type: String },
      default: { type: String },
      large: { type: String },
    },
    imagePublicId: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'Like',
    },],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    }],
  },
  { timestamps: true, }
)

// create public id for image on save
PostSchema.pre('save', async function (next) {
  const post = this
  post.imagePublicId = uuid()
  next()
})

export default mongoose.model('Post', PostSchema)
