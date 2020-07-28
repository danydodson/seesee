"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _crypto = _interopRequireDefault(require("crypto"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc user login
@route POST /api/users/login
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling sign in endpoint ! ⏳⏳');
  const userRecord = await _User.default.findOne({
    email: req.body.email
  });

  if (!userRecord) {
    throw new Error('🔥🔥 [service] user is not registered ! 🔥🔥');
  }

  let hash = _crypto.default.pbkdf2Sync(req.body.password, userRecord.salt, 10000, 512, 'sha512').toString('hex');

  if (userRecord.hash === hash) {
    const user = userRecord.toObject();
    Reflect.deleteProperty(user, 'hash');
    Reflect.deleteProperty(user, 'salt');
    await userRecord.generateAuthToken();
    return res.json(user);
  } else {
    throw new Error('🔥🔥 [service] invalid credentials ! 🔥🔥');
  }
});

exports.default = _default;