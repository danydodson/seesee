"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _generateJWT = _interopRequireDefault(require("../helpers/generateJWT"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = _mongoose.default.Schema({
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
    type: [String],
    default: 'user'
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],
  username: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
}); // generate an auth token for the user


UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await (0, _generateJWT.default)(user);
  user.tokens = user.tokens.concat({
    token
  });
  await user.save();
  return token;
};

var _default = _mongoose.default.model('User', UserSchema);

exports.default = _default;