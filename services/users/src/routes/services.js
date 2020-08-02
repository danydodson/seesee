import User from '#root/models/User'
import crypto from 'crypto'

export default class UserService {

  // setVerifiedService

  async setVerifiedService(token) {
    this.logger.debug('calling verified email endpoint')
    const user = await this.UserModel.findOne({ verifyToken: token })
    if (!user) {
      // process.exit(1)
      throw new Error('no user found to verify')
    }
    user.verified = true
    user.verifyToken = null
    user.updated = Date.now()
    let updatedUser = await user.save()
    if (!updatedUser) {
      throw new Error('error updating user')
    }
    // TODO validation isnt called if this func is called again
    await this.agendaJob.now('send-verified-account-email', {
      email: user.email,
    })
    return { user }
  }


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
