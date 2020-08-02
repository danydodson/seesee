import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// Profiles schema that has reference to User schemas

const ProfileSchema = Schema(
  {
    details: {
      name: String,
      email: String,
      about: String,
      image: String,
      active: Boolean,
      dob: { type: String, required: true },
      username: { type: String, unique: true, index: 1 },
    },
    links: {
      url: String
    },
    friends: {
      following: [{ type: ObjectId, ref: 'User' }],
      followers: [{ type: ObjectId, ref: 'User' }],
      followingCount: { type: Number, default: 0 },
      followersCount: { type: Number, default: 0 },
    },
    favorites: {
      favorited: [{ type: ObjectId, ref: 'Post' }],
      favoritedCount: { type: Number, default: 0 },
    },
    socials: {
      blog: String,
      instagram: String,
      twitter: String,
      facebook: String,
      youtube: String,
      linkedin: String,
    },
    colors: {
      bg: { type: String, default: '#FFFFFF' },
      fg: { type: String, default: '#AAAAAA' },
      mbg: { type: String, default: '#FFEDD4' },
      mfg: { type: String, default: '#7A7A7A' },
      ln: { type: String, default: '#24DADA' },
    },
    vender: {
      role: { type: String, default: 'selling' },
      status: { type: String, default: 'dormant' },
      contact: {
        address: {
          street: String,
          city: String,
          state: String,
          zip: Number,
        },
        geo: {
          type: { type: String, default: 'Point' },
          points: [{ type: Array }],
        },
        phone: Number,
      },
      reviews: {
        critique: String,
        stars: { type: Number, default: 0 },
      },
    },
    user: { type: ObjectId, ref: 'User' },
    posts: [{ type: ObjectId, ref: 'Post' }],
  },
  { timestamps: true }
)

export default mongoose.model('Profile', ProfileSchema)
