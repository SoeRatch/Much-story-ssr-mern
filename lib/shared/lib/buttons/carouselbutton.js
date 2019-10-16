"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  left: 20%;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n\n  &:before{\n      content: '';\n      width: 100%;\n      height: 100%;\n      border-width: 0px 2px 2px 0px\n      border-style: solid;\n      border-color: white;\n      transition: .2s ease;\n      display: block;\n  };\n\n    &:after{\n      content: '';\n      width: 100%;\n      height: 100%;\n      border-width: 0px 0px 2px 0px\n      border-style: solid;\n      border-color: white;\n      transition: .2s ease;\n      display: block;\n      transform:translate(0px,-22px);\n  }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  border:3px solid #fff;\n  background-color:#000;\n  border-radius:50%;\n  box-shadow:2px 2px 18px 4px rgba(0,0,0,0.5);\n  height:50px;\n  width:50px;\n  right:20px;\n  &:hover{\n      border:4px solid #fff;\n      transition:all 0.85s cubic-bezier(0.175,0.885,0.320,1.275);\n    }\n\n  &:hover ", ":after{\n    transform-origin: 226% 45%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  } \n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  right: 20%;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n\n  &:before{\n      content: '';\n      width: 100%;\n      height: 100%;\n      border-width: 2px 0px 0px 2px;\n      border-style: solid;\n      border-color: white;\n      transition: .2s ease;\n      display: block;\n  };\n\n    &:after{\n      content: '';\n      width: 100%;\n      height: 100%;\n      border-width: 0px 0px 0px 2px;\n      border-style: solid;\n      border-color: white;\n      transition: .2s ease;\n      display: block;\n      transform:translate(0px,-20px);\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  border:3px solid #fff;\n  background-color:#000;\n  border-radius:50%;\n  box-shadow:2px 2px 18px 4px rgba(0,0,0,0.5);\n  height:50px;\n  width:50px;\n  left:20px;\n  &:hover{\n      border:4px solid #fff;\n      transition:all 0.85s cubic-bezier(0.175,0.885,0.320,1.275);\n    }\n\n  &:hover ", ":after{\n    transform-origin: -108% -50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  } \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var LeftButtonwrapper = _styledComponents.default.div(_templateObject(), LeftArrow);

var LeftArrow = _styledComponents.default.div(_templateObject2());

var RightButtonwrapper = _styledComponents.default.div(_templateObject3(), RightArrow);

var RightArrow = _styledComponents.default.div(_templateObject4());

var CarouselButton = function CarouselButton(_ref) {
  var direction = _ref.direction;
  if (direction === 'left') return _react.default.createElement(LeftButtonwrapper, null, _react.default.createElement(LeftArrow, null));else return _react.default.createElement(RightButtonwrapper, null, _react.default.createElement(RightArrow, null));
};

var _default = CarouselButton;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LeftButtonwrapper, "LeftButtonwrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/carouselbutton.jsx");
  reactHotLoader.register(LeftArrow, "LeftArrow", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/carouselbutton.jsx");
  reactHotLoader.register(RightButtonwrapper, "RightButtonwrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/carouselbutton.jsx");
  reactHotLoader.register(RightArrow, "RightArrow", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/carouselbutton.jsx");
  reactHotLoader.register(CarouselButton, "CarouselButton", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/carouselbutton.jsx");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/carouselbutton.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();