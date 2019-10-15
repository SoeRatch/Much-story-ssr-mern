"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Row = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n  float:left;\n  ", ";\n\n  @media only screen and (min-width:768px){\n    ", ";\n  }\n\n  @media only screen and (min-width:992px){\n    ", ";\n  }\n\n  @media only screen and (min-width:1200){\n    ", ";\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &::after{\n    content:'';\n    clear:both;\n    display:table;\n  }\n\n  ", "\n  \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Row = _styledComponents.default.div(_templateObject(), function (_ref) {
  var margin_bottom = _ref.margin_bottom;
  return margin_bottom && "margin-bottom:".concat(margin_bottom);
});

exports.Row = Row;

function getWidthString(span) {
  if (!span) return;
  var width = span / 12 * 100;
  return "width:".concat(width, "%;");
}

var Column = _styledComponents.default.div(_templateObject2(), function (_ref2) {
  var xs = _ref2.xs;
  return xs ? getWidthString(xs) : "width:100%";
}, function (_ref3) {
  var sm = _ref3.sm;
  return sm && getWidthString(sm);
}, function (_ref4) {
  var md = _ref4.md;
  return md && getWidthString(md);
}, function (_ref5) {
  var lg = _ref5.lg;
  return lg && getWidthString(lg);
});

exports.Column = Column;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Row, "Row", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Grid/index.js");
  reactHotLoader.register(getWidthString, "getWidthString", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Grid/index.js");
  reactHotLoader.register(Column, "Column", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Grid/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();