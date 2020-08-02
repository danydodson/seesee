import mongoose from 'mongoose'

import geterateJWT from '#root/helpers/generateJWT'

const ObjectId = mongoose.Schema.Types.ObjectId

const UserSchema = mongoose.Schema(
  {
    email: { type: String },
    hash: { type: String },
    salt: { type: String },
    tokens: [{ token: { type: String } }],
    roles: { type: [String], default: 'unverified' },
    profile: { type: ObjectId, ref: 'Profile' }
  },
  { timestamps: true }
)

// generate tokens for a user
UserSchema.methods.generateAuthToken = async function (options) {
  const user = this
  const token = await geterateJWT(user, options)
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

export default mongoose.model('User', UserSchema)