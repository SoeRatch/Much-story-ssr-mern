"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  margin:0px 5px;\n  padding-bottom: 3px;\n  box-shadow: 0 2px 0 #fff;\n  position: relative;\n  font: normal 14px/17px 'Gentium Book Basic', serif;\n\n  font-family:'Itim', cursive;\n  \n  letter-spacing:0em;\n  text-transform: uppercase; \n  text-decoration: none;\n  text-align:center;\n  span {\n    display: block;\n    padding: 1px 2px;\n    border: 2px solid #fff;\n    color:#282726;\n    white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n  }\n\n  &:hover ul.list-categories{\n\t  max-height: inherit;\n\t  opacity: 1;\n\t}\n\n  .list-categories{\n  \t  position:absolute;\n\t  list-style-type: none;\n\t  padding: 0px;\n\t  margin: 0px;\n\t  max-height: 0px;\n\t  opacity: 0;\n\t  overflow: hidden;\n\t  transition: opacity 300ms ease;\n\t  background:rgb(121, 210, 206);\n\t  width:100%;\n\t  border: 2px solid #fff;\n\t}\n  \n  .list-item{\n    text-decoration:none;\n  \tpadding:5px;\n  \tborder-bottom:2px solid #fff;\n  \t&:hover{\n\t  background:white;\n\t}\n\n  &:active{\n    background:#4caf50;\n  }\n  }\n\n"]);

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

var makeCategoryRoute = function makeCategoryRoute(param) {
  return "/category/".concat(param.split(' ').join('-'));
};

var Listhoverbutton = function Listhoverbutton(_ref) {
  var label = _ref.label,
      othercategorynames = _ref.othercategorynames;
  return _react.default.createElement("div", null, _react.default.createElement(Buttonwrapper, null, _react.default.createElement("span", null, label), _react.default.createElement("ul", {
    className: "list-categories"
  }, othercategorynames.map(function (item, index) {
    return _react.default.createElement(_reactRouterDom.NavLink, {
      key: index,
      to: makeCategoryRoute(item),
      style: {
        textDecoration: 'none',
        color: 'black'
      },
      activeStyle: {
        color: '#4caf50'
      },
      exact: true
    }, _react.default.createElement("li", {
      className: "list-item"
    }, item));
  }))));
};

var _default = Listhoverbutton;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Buttonwrapper, "Buttonwrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/buttons/listhoverbutton.js");
  reactHotLoader.register(makeCategoryRoute, "makeCategoryRoute", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/buttons/listhoverbutton.js");
  reactHotLoader.register(Listhoverbutton, "Listhoverbutton", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/buttons/listhoverbutton.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/buttons/listhoverbutton.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();