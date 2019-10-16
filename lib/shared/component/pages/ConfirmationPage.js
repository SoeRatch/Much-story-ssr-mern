"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _auth = require("../../actions/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var ConfirmationPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfirmationPage, _React$Component);

  function ConfirmationPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfirmationPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfirmationPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: true,
      success: false
    });

    return _this;
  }

  _createClass(ConfirmationPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.confirm(this.props.match.params.token).then(function () {
        return _this2.setState({
          loading: false,
          success: true
        });
      }).catch(function () {
        return _this2.setState({
          loading: false,
          success: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          success = _this$state.success;
      return _react.default.createElement("div", null, loading && _react.default.createElement(_semanticUiReact.Message, {
        icon: true
      }, _react.default.createElement(_semanticUiReact.Icon, {
        name: "circle notched",
        loading: true
      }), _react.default.createElement(_semanticUiReact.Message.Header, null, " Validating your email ")), !loading && success && _react.default.createElement(_semanticUiReact.Message, {
        icon: true
      }, _react.default.createElement(_semanticUiReact.Icon, {
        name: "checkmark"
      }), _react.default.createElement(_semanticUiReact.Message.Content, null, _react.default.createElement(_semanticUiReact.Message.Header, null, "Thank you . Your account has been verified"), _react.default.createElement(_reactRouterDom.Link, {
        to: "/dashboard"
      }, "Go to dashboard"))), !loading && !success && _react.default.createElement(_semanticUiReact.Message, {
        negative: true,
        icon: true
      }, _react.default.createElement(_semanticUiReact.Icon, {
        name: "warning sign"
      }), _react.default.createElement(_semanticUiReact.Message.Content, null, _react.default.createElement(_semanticUiReact.Message.Header, null, "Oops. Invalid token"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ConfirmationPage;
}(_react.default.Component);

ConfirmationPage.propTypes = {
  confirm: _propTypes.default.func.isRequired,
  match: _propTypes.default.shape({
    params: _propTypes.default.shape({
      token: _propTypes.default.string.isRequired
    }).isRequired
  }).isRequired
};

var _default = (0, _reactRedux.connect)(null, {
  confirm: _auth.confirm
})(ConfirmationPage);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConfirmationPage, "ConfirmationPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/pages/ConfirmationPage.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/pages/ConfirmationPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();