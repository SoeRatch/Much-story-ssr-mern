"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirm = exports.logout = exports.login = exports.userLoggedOut = exports.userLoggedIn = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("../types");

var _setAuthorizationHeader = _interopRequireDefault(require("../utils/setAuthorizationHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var userLoggedIn = function userLoggedIn(user) {
  return {
    type: _types.USER_LOGGED_IN,
    user: user
  };
};

exports.userLoggedIn = userLoggedIn;

var userLoggedOut = function userLoggedOut() {
  return {
    type: _types.USER_LOGGED_OUT
  };
};

exports.userLoggedOut = userLoggedOut;

var login = function login(credentials) {
  return function (dispatch) {
    return _axios.default.post("/api/auth", {
      credentials: credentials
    }).then(function (res) {
      return res.data.user;
    }).then(function (user) {
      localStorage.muchStoryJWT = user.token;
      (0, _setAuthorizationHeader.default)(user.token);
      dispatch(userLoggedIn(user));
    });
  };
};

exports.login = login;

var logout = function logout() {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      localStorage.removeItem("muchStoryJWT");
      (0, _setAuthorizationHeader.default)();
      dispatch(userLoggedOut());
      resolve("done");
    });
  };
};

exports.logout = logout;

var confirm = function confirm(token) {
  return function (dispatch) {
    return _axios.default.post('/api/auth/confirmation', {
      token: token
    }).then(function (res) {
      return res.data.user;
    }).then(function (user) {
      localStorage.muchStoryJWT = user.token;
      dispatch(userLoggedIn(user));
    });
  };
};

exports.confirm = confirm;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(userLoggedIn, "userLoggedIn", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/auth.js");
  reactHotLoader.register(userLoggedOut, "userLoggedOut", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/auth.js");
  reactHotLoader.register(login, "login", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/auth.js");
  reactHotLoader.register(logout, "logout", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/auth.js");
  reactHotLoader.register(confirm, "confirm", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/auth.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();