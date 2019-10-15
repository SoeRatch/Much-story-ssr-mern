"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ConfirmEmailMessage = function ConfirmEmailMessage() {
  return _react.default.createElement("p", null, " please verify your email to get started ");
};

var _default = ConfirmEmailMessage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConfirmEmailMessage, "ConfirmEmailMessage", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/messages/ConfirmEmailMessage.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/messages/ConfirmEmailMessage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();