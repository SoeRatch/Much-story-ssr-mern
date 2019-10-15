"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = _interopRequireDefault(require("immutable"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _collections = require("../shared/reducer/collections");

var _blogs = require("../shared/reducer/blogs");

var _themes = require("../shared/reducer/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var initStore = function initStore(plainPartialState) {
  var preloadedState = plainPartialState ? {} : undefined;

  if (plainPartialState && plainPartialState.blogcontent) {
    preloadedState.blog = (0, _blogs.blog)(plainPartialState.blogcontent, {});
  }

  if (plainPartialState && plainPartialState.theme) {
    preloadedState.theme = (0, _blogs.blog)(plainPartialState.theme, {});
  }

  return (0, _redux.createStore)((0, _redux.combineReducers)({
    blog: _blogs.blog,
    theme: _themes.theme
  }), preloadedState, (0, _redux.applyMiddleware)(_reduxThunk.default));
};

var _default = initStore;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initStore, "initStore", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/init-store.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/init-store.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();