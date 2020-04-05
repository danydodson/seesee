import { model } from 'mongoose'
import { Schema } from 'mongoose'

const User = new Schema({
  name: String,
})

export default model('User', User)
