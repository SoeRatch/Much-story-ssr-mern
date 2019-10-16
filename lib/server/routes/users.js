"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _User = _interopRequireDefault(require("../models/User"));

var _parseErrors = _interopRequireDefault(require("../utils/parseErrors"));

var _mailer = require("../mailer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var router = _express.default.Router();

router.post('/', function (req, res) {
  var _req$body$user = req.body.user,
      email = _req$body$user.email,
      password = _req$body$user.password,
      username = _req$body$user.username;
  var user = new _User.default({
    email: email
  });
  user.setPassword(password);
  user.username = username;
  user.setConfirmationToken();
  user.save().then(function (userRecord) {
    (0, _mailer.sendConfirmationEmail)(userRecord);
    res.json({
      user: userRecord.toAuthJSON()
    });
  }).catch(function (err) {
    return res.status(400).json({
      errors: err.errmsg
    });
  });
});
var _default = router;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, "router", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/routes/users.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/routes/users.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();