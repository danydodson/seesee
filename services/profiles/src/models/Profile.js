import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Profiles schema that has reference to User schemas

const ProfileSchema = Schema(
  {
    bio: {
      type: String,
    },
    username: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      }
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

export default mongoose.model('Profile', ProfileSchema)
