"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comments = exports.blog = void 0;

var _types = require("../types");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var blog = function blog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _types.CREATE_BLOG:
      return action.blog;

    case _types.FETCH_BLOG:
      return action.blog;

    default:
      return state;
  }
};

exports.blog = blog;

var comments = function comments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _types.COMMENTS_FETCHED:
      return _toConsumableArray(action.comments);

    case _types.CREATE_COMMENT:
      return [action.comment].concat(_toConsumableArray(state));

    default:
      return state;
  }
};

exports.comments = comments;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(blog, "blog", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/reducer/blogs.js");
  reactHotLoader.register(comments, "comments", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/reducer/blogs.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();