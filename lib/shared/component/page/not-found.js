"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var title = 'Page Not Found';

var NotFoundPage = function NotFoundPage() {
  return _react.default.createElement("div", null, _react.default.createElement(_reactHelmet.default, {
    title: title,
    meta: [{
      name: 'description',
      content: 'Hello ! Whats up ! yo '
    }, {
      property: 'og:title',
      content: title
    }]
  }), _react.default.createElement("h1", null, title));
};

var _default = NotFoundPage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(title, "title", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/page/not-found.jsx");
  reactHotLoader.register(NotFoundPage, "NotFoundPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/page/not-found.jsx");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/page/not-found.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();