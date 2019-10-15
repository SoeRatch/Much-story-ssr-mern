"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProd = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//a simple util to test if we are running in production mode or not.
// eslint-disable-next-line import/prefer-default-export
var isProd = process.env.NODE_ENV === 'production';
exports.isProd = isProd;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isProd, "isProd", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/util.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();