import { randomBytes, pbkdf2Sync } from 'crypto'

export default class UserService {

  constructor(logger, UserModel, generateToken) {
    this.logger = logger
    this.UserModel = UserModel
    this.generateToken = generateToken
  }

  async signUpService(userInputDTO) {
    try {

      const salt = randomBytes(32)

      this.Logger.silly('Hashing password')
      const hashedPassword = await pbkdf2Sync(userInputDTO, salt, 10000, 512, 'sha512').toString('hex')

      this.Logger.silly('Creating user db record')
      const userRecord = await this.userModel.create({
        ...userInputDTO,
        salt: salt.toString('hex'),
        password: hashedPassword,
      })

      this.Logger.silly('Generating JWT')
      const token = this.generateToken(userRecord)

      if (!userRecord) {
        throw new Error('User cannot be created')
      }

      // this.Logger.silly('Sending welcome email')
      // await this.mailer.SendWelcomeEmail(userRecord)

      // this.eventDispatcher.dispatch(events.user.signUp, { user: userRecord })

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      // const user = userRecord.toObject()
      // Reflect.deleteProperty(user, 'password')
      // Reflect.deleteProperty(user, 'salt')
      return { user, token }
      
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }
}