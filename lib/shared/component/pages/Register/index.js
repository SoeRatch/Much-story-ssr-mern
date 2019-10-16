"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _users = require("../../../actions/users");

var _auth = require("../../../actions/auth");

var _SignupForm = _interopRequireDefault(require("./forms/SignupForm"));

var _LoginForm = _interopRequireDefault(require("./forms/LoginForm"));

var _styledcomponents = require("./styledcomponents");

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

var Register =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      rightpanelactive: false
    });

    _defineProperty(_assertThisInitialized(_this), "signupsubmit", function (data) {
      return _this.props.signup(data).then(function () {
        _this.props.history.push("/dashboard");
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loginsubmit", function (data) {
      return _this.props.login(data).then(function () {
        _this.props.history.push("/dashboard");
      });
    });

    _defineProperty(_assertThisInitialized(_this), "movehandler", function (e) {
      e.preventDefault();
      var container = document.getElementById('container');
      var elemId = e.target.id;
      /*let hashedEg=container.classList[0].split('--');
      hashedEg[hashedEg.length-1]='right-panel-active';
      hashedEg=hashedEg.join('--');*/

      var hashedEg = 'rightpanelactive';

      if (elemId == 'signUp') {
        //container.classList.add(hashedEg);
        _this.setState({
          rightpanelactive: true
        });
      } else if (elemId == 'signIn') {
        //container.classList.remove(hashedEg);
        _this.setState({
          rightpanelactive: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mobiletabhandler", function (e) {
      e.preventDefault();
      var elemId = e.target.id;
      var targetedElem = document.getElementById('mobilesignup');

      if (elemId == 'signUp') {
        targetedElem.style.opacity = '1';
        targetedElem.style.zIndex = '5';
      } else if (elemId == 'signIn') {
        targetedElem.style.opacity = '0';
        targetedElem.style.zIndex = '1';
      }
    });

    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_Hidden.default, {
        smDown: true,
        implementation: "css"
      }, _react.default.createElement(_styledcomponents.BodyContainer, null, _react.default.createElement(_styledcomponents.Container, {
        id: "container",
        rightpanelactive: this.state.rightpanelactive
      }, _react.default.createElement("div", {
        style: {
          position: 'absolute',
          right: '0',
          top: '0',
          marginRight: '1%',
          zIndex: '101',
          border: '2px solid black',
          backgroundColor: "white"
        }
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        to: "/",
        exact: true
      }, _react.default.createElement(_styledcomponents.Bar, {
        style: {
          transform: "rotate(-45deg) translate(-9px, 6px)"
        }
      }), _react.default.createElement(_styledcomponents.Bar, {
        style: {
          opacity: '0'
        }
      }), _react.default.createElement(_styledcomponents.Bar, {
        style: {
          transform: "rotate(45deg) translate(-8px, -8px)"
        }
      }))), _react.default.createElement(_styledcomponents.FormContainer, {
        className: "sign-up-container"
      }, _react.default.createElement(_SignupForm.default, {
        submit: this.signupsubmit,
        containertype: "desktop"
      })), _react.default.createElement(_styledcomponents.FormContainer, {
        className: "sign-in-container"
      }, _react.default.createElement(_LoginForm.default, {
        submit: this.loginsubmit,
        containertype: "desktop"
      })), _react.default.createElement(_styledcomponents.OverlayContainer, {
        className: "overlay-container"
      }, _react.default.createElement(_styledcomponents.Overlay, {
        rightpanelactive: this.state.rightpanelactive,
        className: "overlay"
      }, _react.default.createElement(_styledcomponents.OverlayPanel, {
        className: "overlay-left"
      }, _react.default.createElement("h1", {
        style: {
          fontWeight: 'bold',
          margin: '0'
        }
      }, "Already have an account ?"), _react.default.createElement("p", {
        style: {
          fonSize: '14px',
          fontWeight: '100',
          lineHeight: '20px',
          letterSpacing: '0.5px',
          margin: '20px 0 30px'
        }
      }, "Sign in to read the most amazing articles of 21st century or start writing your most valuable, unique and futuristic story today."), _react.default.createElement(_styledcomponents.FormActionButton, {
        id: "signIn",
        onClick: this.movehandler
      }, "Sign In")), _react.default.createElement(_styledcomponents.OverlayPanel, {
        className: "overlay-right"
      }, _react.default.createElement("h1", {
        style: {
          fontWeight: 'bold',
          margin: '0'
        }
      }, "Join Much Story ."), _react.default.createElement("p", {
        style: {
          fonSize: '14px',
          fontWeight: '100',
          lineHeight: '20px',
          letterSpacing: '0.5px',
          margin: '20px 0 30px'
        }
      }, "Sign up to create, read, watch and publish your personalized creative stories right now ."), _react.default.createElement(_styledcomponents.FormActionButton, {
        id: "signUp",
        onClick: this.movehandler
      }, "Sign Up"))))))), _react.default.createElement(_Hidden.default, {
        mdUp: true,
        implementation: "css"
      }, _react.default.createElement(_styledcomponents.BodyContainer, null, _react.default.createElement(_styledcomponents.Container, {
        id: "container"
      }, _react.default.createElement(_styledcomponents.MobileTabContainer, null, _react.default.createElement("div", {
        style: {
          width: '100%',
          height: '50%'
        }
      }, _react.default.createElement("div", {
        style: {
          position: 'absolute',
          right: '0',
          top: '0',
          marginRight: '1%',
          zIndex: '101',
          border: '2px solid black',
          backgroundColor: "white"
        }
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        to: "/",
        exact: true
      }, _react.default.createElement(_styledcomponents.Bar, {
        style: {
          transform: "rotate(-45deg) translate(-9px, 6px)"
        }
      }), _react.default.createElement(_styledcomponents.Bar, {
        style: {
          opacity: '0'
        }
      }), _react.default.createElement(_styledcomponents.Bar, {
        style: {
          transform: "rotate(45deg) translate(-8px, -8px)"
        }
      })))), _react.default.createElement(_styledcomponents.MobileTabItem, {
        id: "signUp",
        onClick: this.mobiletabhandler
      }, "Sign Up"), _react.default.createElement(_styledcomponents.MobileTabItem, {
        id: "signIn",
        onClick: this.mobiletabhandler
      }, "Sign In")), _react.default.createElement(_styledcomponents.FormContainer, {
        className: "sign-up-container",
        id: "mobilesignup"
      }, _react.default.createElement(_SignupForm.default, {
        submit: this.signupsubmit,
        containertype: "mobile"
      })), _react.default.createElement(_styledcomponents.FormContainer, {
        className: "sign-in-container"
      }, _react.default.createElement(_LoginForm.default, {
        submit: this.loginsubmit,
        containertype: "mobile"
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Register;
}(_react.default.Component);

Register.propTypes = {
  signup: _propTypes.default.func.isRequired,
  login: _propTypes.default.func.isRequired
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, {
  signup: _users.signup,
  login: _auth.login
})(Register));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Register, "Register", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/pages/Register/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/pages/Register/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();