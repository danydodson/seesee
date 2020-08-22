import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Like schema that has references to Post and User schema

const LikeSchema = Schema(
  {
    listing: {
      type: Schema.Types.ObjectId,
      ref: 'Listing',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Like', LikeSchema)
