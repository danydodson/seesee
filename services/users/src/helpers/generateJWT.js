import jwt from 'jsonwebtoken'
import accessEnv from '#root/helpers/accessEnv'

/**
 * A json web token is basically a json file _hashed_ into a string.
 * the cool thing is that you can add custom properties a.k.a metadata
 * here we are adding the userId, role, name and exp date. beware the metadata 
 * is public and can be decoded without _the secret_ but the client cannot craft 
 * a jwt to fake a userId because it doesn't have _the secret_ to sign it.
 * 
 */

const geterateJWT = async (user) => {
  return jwt.sign(
    {
      _id: user._id, // this could be used in the middleware 'isAuthenticated'
      sub: user._id,
      iss: 'seesee.space',
      aud: 'app_id-or-client_id',
      email: user.email,
      fullName: user.fullName,
      roles: user.roles, // this could be used in the middleware 'isAuthorized'
      username: user.username,
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      iat: Math.floor(Date.now() / 1000) - 30,
    },
    accessEnv('JWT_SECRET')
  )
}

export default geterateJWT