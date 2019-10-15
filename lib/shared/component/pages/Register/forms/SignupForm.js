"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _validator = _interopRequireDefault(require("validator"));

var _reactRouterDom = require("react-router-dom");

var _InlineError = _interopRequireDefault(require("../../../messages/InlineError"));

var _styledcomponents = require("../styledcomponents");

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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SignupForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  function SignupForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SignupForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SignupForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: {
        email: '',
        password: '',
        username: ''
      },
      errors: {},
      containertype: _this.props.containertype
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      return _this.setState({
        data: _objectSpread({}, _this.state.data, _defineProperty({}, e.target.name, e.target.value))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();

      var errors = _this.validate(_this.state.data);

      _this.setState({
        errors: errors
      });

      if (Object.keys(errors).length === 0) {
        _this.props.submit(_this.state.data);
        /*
        .catch(err => this.setState({
        errors: err.response.data.errors
        }));*/

      }
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function (data) {
      var errors = {};
      if (!_validator.default.isEmail(data.email)) errors.email = "Invalid email";
      if (!data.password) errors.password = "Can't be blank";
      if (!data.username) errors.username = "Can't be blank";
      return errors;
    });

    return _this;
  }

  _createClass(SignupForm, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          errors = _this$state.errors,
          containertype = _this$state.containertype;
      var _u_id$e_id$p_id = {
        u_id: "".concat(containertype, "usernamesignup"),
        e_id: "".concat(containertype, "emailsignup"),
        p_id: "".concat(containertype, "passwordsignup")
      },
          u_id = _u_id$e_id$p_id.u_id,
          e_id = _u_id$e_id$p_id.e_id,
          p_id = _u_id$e_id$p_id.p_id;
      return _react.default.createElement("form", {
        style: {
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '0 50px',
          height: '100%',
          textAlign: 'center'
        },
        onSubmit: this.onSubmit
      }, _react.default.createElement("h1", {
        style: {
          fontWeight: 'bold',
          margin: '0',
          color: '#79d2ce'
        }
      }, "Create Account"), _react.default.createElement("input", {
        style: {
          backgroundColor: '#eee',
          border: 'none',
          padding: '12px 15px',
          margin: '8px 0',
          width: '100%'
        },
        type: "text",
        id: u_id,
        name: "username",
        value: data.username,
        placeholder: "Name",
        onChange: this.onChange
      }), errors.username && _react.default.createElement(_InlineError.default, {
        text: errors.username
      }), _react.default.createElement("input", {
        style: {
          backgroundColor: '#eee',
          border: 'none',
          padding: '12px 15px',
          margin: '8px 0',
          width: '100%'
        },
        type: "email",
        id: e_id,
        name: "email",
        value: data.email,
        placeholder: "Email",
        onChange: this.onChange
      }), errors.email && _react.default.createElement(_InlineError.default, {
        text: errors.email
      }), _react.default.createElement("input", {
        style: {
          backgroundColor: '#eee',
          border: 'none',
          padding: '12px 15px',
          margin: '8px 0',
          width: '100%'
        },
        type: "password",
        id: p_id,
        name: "password",
        value: data.password,
        placeholder: "Password",
        onChange: this.onChange
      }), errors.password && _react.default.createElement(_InlineError.default, {
        text: errors.password
      }), _react.default.createElement(_styledcomponents.FormButtonInput, {
        type: "submit",
        name: "",
        value: "Sign Up"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SignupForm;
}(_react.default.Component);

SignupForm.propTypes = {
  submit: _propTypes.default.func.isRequired
};

var _default = (0, _reactRouterDom.withRouter)(SignupForm);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignupForm, "SignupForm", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/pages/Register/forms/SignupForm.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/pages/Register/forms/SignupForm.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();