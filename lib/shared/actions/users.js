"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _auth = require("./auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var signup = function signup(user) {
  return function (dispatch) {
    return _axios.default.post("/api/users", {
      user: user
    }).then(function (res) {
      return res.data.user;
    }).then(function (user) {
      localStorage.muchStoryJWT = user.token;
      dispatch((0, _auth.userLoggedIn)(user));
    });
  };
};

exports.signup = signup;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(signup, "signup", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/users.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();