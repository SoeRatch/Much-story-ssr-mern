"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _validator = _interopRequireDefault(require("validator"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _BlockError = _interopRequireDefault(require("../../../component/messages/BlockError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width:80%;\n  margin-left:auto;\n  margin-right:auto;\n  @media only screen and (min-width:768px){\n      width:50%;\n    }  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color:white;\n  margin:10% 5% 0 5%;\n  font-size:1.2em;\n  font-weight:800;\n  font-family: proxima-nova,Proxima Nova,sans-serif;\n  text-align:center;\n  letter-spacing:0.2em;\n  text-transform: uppercase; \n  @media only screen and (min-width:768px){\n      font-size:1.9em;\n      margin:3% 5% 0 5%;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width:100%;\n  height:100%;\n  overflow: hidden;\n  margin:0;\n  padding:0;\n  background:rgba(121, 210, 206,0.95);\n\n   white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n      vertical-align: middle;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  width:100vw;\n  height:52vh;\n  margin:0;\n  padding:0;\n  white-space: nowrap;\n  overflow: hidden;\n  background-image:url(https://res.cloudinary.com/surajsharma/image/upload/v1568825564/muchstoryimages/best_place.png);\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position:center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Container = _styledComponents.default.div(_templateObject());

var Wrapper = _styledComponents.default.div(_templateObject2());

var LeadTitle = _styledComponents.default.h2(_templateObject3());

var LeadInput = _styledComponents.default.div(_templateObject4());

var LeadGeneration =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeadGeneration, _React$Component);

  function LeadGeneration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LeadGeneration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LeadGeneration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {
        email: '',
        message: ''
      },
      successMsg: "",
      errors: {}
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      return _this.setState({
        data: _objectSpread({}, _this.state.data, _defineProperty({}, e.target.name, e.target.value))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (e) {
      e.preventDefault();

      var errors = _this.validate(_this.state.data);

      _this.setState({
        errors: errors
      });

      if (Object.keys(errors).length === 0) {
        var data = _this.state.data;

        _axios.default.post('/api/emails/getintouch', {
          data: data
        }).then(function (res) {
          var message = res.data.message;

          _this.setState(_objectSpread({}, _this.state, {
            successMsg: message
          }));
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function (data) {
      var errors = {};
      if (!_validator.default.isEmail(data.email)) errors.email = "Invalid email";
      if (!data.message) errors.message = "A message from you would help us to be in contact quickly";
      return errors;
    });

    return _this;
  }

  _createClass(LeadGeneration, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      var _this$state = this.state,
          data = _this$state.data,
          errors = _this$state.errors,
          successMsg = _this$state.successMsg;
      return _react.default.createElement(Container, null, _react.default.createElement(Wrapper, null, _react.default.createElement(LeadTitle, null, title), _react.default.createElement(LeadInput, null, _react.default.createElement(_TextField.default, {
        id: "outlined-email-input",
        label: "Email",
        type: "email",
        name: "email",
        autoComplete: "email",
        margin: "normal",
        variant: "outlined",
        fullWidth: true,
        value: data.email,
        onChange: this.onChange
      }), _react.default.createElement(_TextField.default, {
        id: "filled-textarea",
        label: "Your message",
        name: "message",
        placeholder: "Write your message . Please Mention your name",
        multiline: true,
        margin: "normal",
        variant: "filled",
        fullWidth: true,
        value: data.message,
        onChange: this.onChange
      }), _react.default.createElement(_Button.default, {
        color: "secondary",
        variant: "contained",
        fullWidth: true,
        onClick: this.submit
      }, "Get in touch"), errors.email && _react.default.createElement(_BlockError.default, {
        text: errors.email
      }), errors.message && _react.default.createElement(_BlockError.default, {
        text: errors.message
      }), successMsg.length > 0 && _react.default.createElement(_BlockError.default, {
        text: successMsg
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LeadGeneration;
}(_react.default.Component);

var _default = LeadGeneration;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Container, "Container", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/leadGeneration.js");
  reactHotLoader.register(Wrapper, "Wrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/leadGeneration.js");
  reactHotLoader.register(LeadTitle, "LeadTitle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/leadGeneration.js");
  reactHotLoader.register(LeadInput, "LeadInput", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/leadGeneration.js");
  reactHotLoader.register(LeadGeneration, "LeadGeneration", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/leadGeneration.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/leadGeneration.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();