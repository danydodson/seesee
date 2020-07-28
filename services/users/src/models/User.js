import mongoose from 'mongoose'

import geterateJWT from '#root/helpers/generateJWT'

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    fullName: {
      type: String,
      required: true
    },
    passwordResetToken: {
      type: String
    },
    passwordResetTokenExpiry: {
      type: Date
    },
    hash: {
      type: String
    },
    salt: {
      type: String
    },
    roles: {
      type: [String], default: 'user'
    },
    tokens: [{
      token: { type: String, required: true }
    }],
    username: {
      type: String, required: true, unique: true
    }
  },
  { timestamps: true }
)

// generate an auth token for the user
UserSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = await geterateJWT(user)
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

export default mongoose.model('User', UserSchema)