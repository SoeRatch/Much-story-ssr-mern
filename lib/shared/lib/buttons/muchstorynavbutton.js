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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  margin:0px 5px;\n  padding-bottom: 3px;\n  box-shadow: 0 2px 0 #fff;\n  position: relative;\n  font: normal 14px/17px 'Gentium Book Basic', serif;\n\n  font-family:'Itim', cursive;\n  \n  letter-spacing:0em;\n  text-transform: uppercase; \n  text-decoration: none;\n  text-align:center;\n  span {\n    display: block;\n    padding: 1px 2px;\n    border: 2px solid #fff;\n    color:#282726;\n    white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n  }\n\n  &:hover{\n    padding-bottom:0px;\n  }\n\n  \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Buttonwrapper = _styledComponents.default.div(_templateObject());

var actionButtonStyle = {
  letterSpacing: '0.1em',
  background: '#e9ad6b'
};
var actionSpanStyle = {
  padding: "3px 9px"
};

var Msbutton = function Msbutton(_ref) {
  var label = _ref.label,
      action = _ref.action;
  return _react.default.createElement(Buttonwrapper, {
    style: action ? actionButtonStyle : {}
  }, _react.default.createElement("span", {
    style: action ? actionSpanStyle : {}
  }, label));
};

var _default = Msbutton;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Buttonwrapper, "Buttonwrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/muchstorynavbutton.jsx");
  reactHotLoader.register(actionButtonStyle, "actionButtonStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/muchstorynavbutton.jsx");
  reactHotLoader.register(actionSpanStyle, "actionSpanStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/muchstorynavbutton.jsx");
  reactHotLoader.register(Msbutton, "Msbutton", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/muchstorynavbutton.jsx");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/buttons/muchstorynavbutton.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();