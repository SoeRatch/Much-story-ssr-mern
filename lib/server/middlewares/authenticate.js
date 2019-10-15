"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

require('dotenv').config();

var _default = function _default(req, res, next) {
  var header = req.headers.authorization;
  var token;
  if (header) token = header.split(' ')[1];

  if (token) {
    _jsonwebtoken.default.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        res.status(401).json({
          errors: {
            global: "Invalid token"
          }
        });
      } else {
        _User.default.findOne({
          email: decoded.email
        }).then(function (user) {
          req.currentUser = user;
          next();
        });
      }
    });
  } else {
    res.status(401).json({
      errors: {
        global: "No token"
      }
    });
  }
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/middlewares/authenticate.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();