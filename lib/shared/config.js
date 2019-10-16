"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APP_CONTAINER_SELECTOR = exports.APP_CONTAINER_CLASS = exports.WDS_PORT = exports.APP_NAME = exports.STATIC_PATH = exports.WEB_PORT = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var WEB_PORT = process.env.PORT || 8000;
exports.WEB_PORT = WEB_PORT;
var STATIC_PATH = '/static';
exports.STATIC_PATH = STATIC_PATH;
var APP_NAME = 'MUCHSTORY';
exports.APP_NAME = APP_NAME;
var WDS_PORT = 7000;
exports.WDS_PORT = WDS_PORT;
var APP_CONTAINER_CLASS = 'js-app';
exports.APP_CONTAINER_CLASS = APP_CONTAINER_CLASS;
var APP_CONTAINER_SELECTOR = ".".concat(APP_CONTAINER_CLASS);
exports.APP_CONTAINER_SELECTOR = APP_CONTAINER_SELECTOR;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WEB_PORT, "WEB_PORT", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/config.js");
  reactHotLoader.register(STATIC_PATH, "STATIC_PATH", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/config.js");
  reactHotLoader.register(APP_NAME, "APP_NAME", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/config.js");
  reactHotLoader.register(WDS_PORT, "WDS_PORT", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/config.js");
  reactHotLoader.register(APP_CONTAINER_CLASS, "APP_CONTAINER_CLASS", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/config.js");
  reactHotLoader.register(APP_CONTAINER_SELECTOR, "APP_CONTAINER_SELECTOR", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/config.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();