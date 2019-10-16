"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _ConfirmEmailMessage = _interopRequireDefault(require("../../messages/ConfirmEmailMessage"));

var _blogs = require("../../../actions/blogs");

var _Card = require("../../../lib/Card");

var _Grid = require("../../../lib/Grid");

var _Headers = require("../../../lib/Headers");

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

var DashboardPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashboardPage, _React$Component);

  function DashboardPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DashboardPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DashboardPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.onInit(_this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "onInit", function (props) {
      props.fetchusercollections();
    });

    return _this;
  }

  _createClass(DashboardPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          blogcollections = _this$props.blogcollections;
      return _react.default.createElement("div", null, user && !user.confirmed && _react.default.createElement(_ConfirmEmailMessage.default, null), user && user.confirmed && _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Headers.LeadTitle, null, " Your Articles "), blogcollections && blogcollections.map(function (item, index) {
        return _react.default.createElement(_Grid.Column, {
          xs: "12",
          sm: "4",
          md: "4",
          style: {
            height: '600px'
          },
          key: index
        }, _react.default.createElement(_reactRouterDom.Link, {
          to: "/".concat(item.username, "/").concat(item.title.split(' ').join('-'), "-").concat(item._id),
          style: {
            textDecoration: 'none'
          }
        }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_Card.ImageWrapper, {
          style: {
            backgroundImage: "url(".concat(item.thumbnail_url, ")")
          }
        }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
          style: {
            display: 'block'
          }
        }, item.category)), _react.default.createElement(_Card.CardTitle, null, item.title), _react.default.createElement(_Card.CardMeta, null, "By ", item.username), _react.default.createElement(_Card.CardView, null, item.description))));
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return DashboardPage;
}(_react.default.Component);

DashboardPage.propTypes = {
  user: _propTypes.default.object.isRequired,
  blogcollections: _propTypes.default.arrayOf(_propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    thumbnail_url: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    votes: _propTypes.default.number.isRequired,
    category: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired
  })).isRequired,
  fetchusercollections: _propTypes.default.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    blogcollections: state.collections && state.collections.userblogs
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  fetchusercollections: _blogs.fetchusercollections
})(DashboardPage);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DashboardPage, "DashboardPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/pages/DashboardPage/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/pages/DashboardPage/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/pages/DashboardPage/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();