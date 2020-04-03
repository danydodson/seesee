import userModel from '../db/models'

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
export const signUpService = () => {

  let person = new userModel({
    name: 'dany'
  })

  person
    .save()
    .then(doc => console.log(doc))
    .catch(err => console.error(err))

  const user = person.toObject()

  return { user }
}
