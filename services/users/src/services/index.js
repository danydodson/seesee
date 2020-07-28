import User from '#root/models/User'
import crypto from 'crypto'

export default class UserService {

  // testingService
  async testingService() {
    console.debug('⏳⏳⏳  [service] calling auth test endpoint')
    return { jsonMsg: 'auth test route working' }
  }

  // signUpService
  async registerService(userObject) {
    console.debug('⏳⏳⏳  [service] calling sign up endpoint')

    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.pbkdf2Sync(userObject.password, salt, 10000, 512, 'sha512').toString('hex')

    console.debug('⏳⏳⏳  [service] building new user')
    const userRecord = new User({ ...userObject, salt: salt, hash: hash })
    await userRecord.generateAuthToken()

    if (!userRecord) {
      console.error('🔥🔥🔥  [service] user connot be created')
    }

    const user = userRecord.toObject()
    return { user }
  }

  // signInService
  async loginService(email, password) {
    console.debug('⏳⏳⏳  [service] calling sign in endpoint')

    const userRecord = await User.findOne({ email })

    if (!userRecord) {
      throw new Error('🔥🔥🔥  [service] user is not registered')
    }

    let hash = crypto
      .pbkdf2Sync(password, userRecord.salt, 10000, 512, 'sha512')
      .toString('hex')

    if (userRecord.hash === hash) {
      const user = userRecord.toObject()

      Reflect.deleteProperty(user, 'hash')
      Reflect.deleteProperty(user, 'salt')
      await userRecord.generateAuthToken()

      return { user }
    } else {
      throw new Error('🔥🔥🔥  [service] invalid credentials')
    }
  }


  // setVerifiedService

  async setVerifiedService(token) {
    this.logger.debug('👞  calling verified email endpoint')

    const user = await this.UserModel.findOne({ verifyToken: token })

    if (!user) {
      process.exit(1)
      this.logger.error('🔥 error on finding a user by verifyToken')
      throw new Error('🔥  no user found to verify')
    }

    user.verified = true
    user.verifyToken = null
    user.updated = Date.now()

    let updatedUser = await user.save()

    if (!updatedUser) {
      throw new Error('🔥  error updating user')
    }

    // TODO validation isnt called if this func is called again

    await this.agendaJob.now('send-verified-account-email', {
      email: user.email,
    })

    return { user }
  }

  // /**
  //  * @desc forgotPassService
  //  */
  async forgotPassService(id) {
    this.logger.debug('👞  calling forgot password endpoint')

    const user = await this.UserModel.findOne({ _id: id })

    if (!user) {
      throw new Error('🔥  user not found')
    }

    const getTokenObject = user => user.forgotPasswordToken()
    const tokenObject = await getTokenObject(user)
    const token = tokenObject.toString()

    user.resetToken = token
    await user.save()

    this.logger.debug(user)

    const mailData = {
      email: user.email,
      client: config.url.client,
      token: token,
    }
    await this.agendaJob.now('send-forgot-password-email', mailData)

    const userData = await user.forgotPasswordToken(user)

    return { userData }
  }

  // /**
  //  * @desc resetPassService
  //  */
  async resetPassService(id, userInput) {
    this.logger.debug('👞  calling reset password endpoint')

    const foundUser = await this.UserModel.findOne({ _id: id })
    const user = await this.UserModel.findOne({
      resetToken: foundUser.resetToken,
    })
    // const user = await this.UserModel.findOne({ resetToken: foundUser.resetToken })

    if (!foundUser || !user) {
      throw new Error('🔥  invalid reset password link')
    }

    await user.setPassword(userInput.newPassword)

    user.updated = Date.now()
    user.resetToken = null

    const updatedUser = await user.save()

    if (!updatedUser) {
      throw new Error('🔥  error updating password')
    }

    await this.agendaJob.now('send-password-reset-email', { email: user.email })

    const userData = user.resetPasswordUserToJSON()

    return { userData }
  }

  // signOutService
  async signOutService(auth) {
    const token = auth.split(' ')[1]
    // insert an add to blacklist job here
    return { token }
  }

  // delUserService
  async deleteUserService(id) {
    console.debug('⏳⏳⏳  [service] calling destroy user endpoint')
    console.debug('⏳⏳⏳  [service] calling destroy user endpoint')

    const foundUser = await User.findOne({ _id: id })
    if (!foundUser) {
      throw new Error('🔥🔥🔥  [service] user not found')
    }

    const del = await User.findOneAndRemove({ _id: user._id })
    if (!del) {
      throw new Error('🔥🔥🔥  [service] error deleting user')
    }

    return
  }
}
