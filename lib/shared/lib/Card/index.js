"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardView = exports.CardMeta = exports.CardTitle = exports.TagBox = exports.ImageWrapper = exports.CardContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: Merriweather,Helvetica,Arial,sans-serif;\n  font-size:16px;\n  line-height:28px;\n  color:#2e2e2e;\n  letter-spacing:0;\n  font-weight:300;\n  padding:20px 24px 24px;\n  display:block;\n  margin:0;\n  \n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: Poppins,Helvetica,Arial,sans-serif;\n  color:#909090;\n  letter-spacing:0.4px;\n  padding:0 24px;\n  margin:0;\n  display:block;\n  \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: Poppins,Helvetica,Arial,sans-serif;\n  display:block;\n  font-size: 24px;\n  font-weight: 700;\n  font-style:bold;\n  line-height: 32px;\n  letter-spacing: -0.6px;\n  padding: 12px 24px 4px;\n  color:#2e2e2e;\n  margin-bottom:0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position:'relative';\n  width:fit-content;\n  height:fit-content;\n  margin:-15px 8%;\n  background-color:rgb(121, 210, 206);\n  font-family: proxima-nova,Proxima Nova,sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 1.6px;\n  text-transform: uppercase;\n  font-style:bold;\n  span {\n    display: block;\n    padding:12px;\n    color:#282726;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-size:cover;\n    background-repeat:no-repeat;\n    background-position:center;\n    \n     ", ";\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["           \n      height:100%;\n      padding:15px;\n\n      white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var CardContainer = _styledComponents.default.div(_templateObject());

exports.CardContainer = CardContainer;

var ImageWrapper = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var height_value = _ref.height_value;
  return height_value ? "height:".concat(height_value) : 'height:35%';
});

exports.ImageWrapper = ImageWrapper;

var TagBox = _styledComponents.default.div(_templateObject3());

exports.TagBox = TagBox;

var CardTitle = _styledComponents.default.h4(_templateObject4());

exports.CardTitle = CardTitle;

var CardMeta = _styledComponents.default.p(_templateObject5());

exports.CardMeta = CardMeta;

var CardView = _styledComponents.default.p(_templateObject6());

exports.CardView = CardView;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardContainer, "CardContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Card/index.js");
  reactHotLoader.register(ImageWrapper, "ImageWrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Card/index.js");
  reactHotLoader.register(TagBox, "TagBox", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Card/index.js");
  reactHotLoader.register(CardTitle, "CardTitle", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Card/index.js");
  reactHotLoader.register(CardMeta, "CardMeta", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Card/index.js");
  reactHotLoader.register(CardView, "CardView", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/lib/Card/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();