"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _blogs = require("../../actions/blogs");

var _Card = require("../../lib/Card");

var _Grid = require("../../lib/Grid");

var _Headers = require("../../lib/Headers");

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

var CategoryPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CategoryPage, _React$Component);

  function CategoryPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CategoryPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CategoryPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      title: ''
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.onInit(_this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "onInit", function (props) {
      var categoryname = props.match.params.categoryname;
      categoryname = categoryname.split('-').join(' ');

      _this.setState({
        title: categoryname
      });

      props.fetchcategorycollections(categoryname);
    });

    return _this;
  }

  _createClass(CategoryPage, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.match.params.categoryname !== nextProps.match.params.categoryname) {
        this.onInit(nextProps);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var blogcollections = this.props.blogcollections;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
        style: {
          margin: '0',
          padding: '0',
          width: '100%',
          overflow: 'hidden'
        }
      }, _react.default.createElement(_Headers.LeadTitle, null, " ", this.state.title, " "), blogcollections && blogcollections.map(function (item, index) {
        return _react.default.createElement(_Grid.Column, {
          xs: "12",
          sm: "4",
          md: "4",
          style: {
            height: '500px'
          },
          key: index
        }, _react.default.createElement(_reactRouterDom.Link, {
          to: "/".concat(item.username, "/").concat(item.title.split(' ').join('-'), "-").concat(item._id),
          style: {
            textDecoration: 'none'
          }
        }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_Card.ImageWrapper, {
          height_value: "40%",
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

  return CategoryPage;
}(_react.default.Component);

CategoryPage.propTypes = {
  blogcollections: _propTypes.default.arrayOf(_propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    thumbnail_url: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    votes: _propTypes.default.number.isRequired,
    category: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired
  })).isRequired,
  match: _propTypes.default.shape({
    params: _propTypes.default.shape({
      categoryname: _propTypes.default.string.isRequired
    }).isRequired
  }).isRequired,
  fetchcategorycollections: _propTypes.default.func.isRequired
};

function mapStateToProps(state) {
  return {
    blogcollections: state.collections && state.collections.categorycollection
  };
}

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  fetchcategorycollections: _blogs.fetchcategorycollections
})(CategoryPage));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CategoryPage, "CategoryPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/categoryPage/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/categoryPage/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/categoryPage/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();