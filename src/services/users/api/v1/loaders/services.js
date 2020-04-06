import userModel from '../models/User'

/**
 * @desc testingService
 */
export const testingService = () => {
  const testMsg = { jsonMsg: 'auth test route working' }
  return { testMsg }

}

/**
 * @desc signUpService
 */
export const signUpService = (name) => {

  let person = new userModel({
    name: name.name
  })

  person
    .save()
    .then(doc => console.log(doc))
    .catch(err => console.error(err))

  const user = person.toObject()

  return { user }
}
