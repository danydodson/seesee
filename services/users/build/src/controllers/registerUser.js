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
@desc register a new user
@route POST /api/users/register
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling register user endpoint ! ⏳⏳');

  const salt = _crypto.default.randomBytes(16).toString('hex');

  const hash = _crypto.default.pbkdf2Sync(req.body.password, salt, 10000, 512, 'sha512').toString('hex');

  console.debug('⏳⏳ [service] building new user ! ⏳⏳');
  const userRecord = new _User.default({ ...req.body,
    salt: salt,
    hash: hash
  });
  await userRecord.generateAuthToken();

  if (!userRecord) {
    console.error('🔥🔥 [service] user connot be created 🔥🔥');
  }

  const user = userRecord.toObject();
  return res.json(user);
});

exports.default = _default;