const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('../config/database')
const User = require('../models/user')

module.exports = function (passport) {
  let opts = {
    // iss:"http://seesee.space"
  }
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('bearer')
  opts.secretOrKey = config.secret
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.getUserById(jwt_payload._id, (err, user) => {
        if (err) return done(err, false)
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
    })
  )
}