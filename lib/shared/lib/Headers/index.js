"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeadTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color:#121416;\n  font-size:1.7em;\n  font-weight:800;\n  font-family: proxima-nova,Proxima Nova,sans-serif;\n  letter-spacing:0.1em;\n  text-transform: uppercase; \n  text-align:center;\n\n   @media only screen and (min-width:768px){\n      font-size:2.2em;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var LeadTitle = _styledComponents.default.h3(_templateObject());

exports.LeadTitle = LeadTitle;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LeadTitle, "LeadTitle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/Headers/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();