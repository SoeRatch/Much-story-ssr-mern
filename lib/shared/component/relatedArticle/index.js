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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var RelatedArticle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelatedArticle, _React$Component);

  function RelatedArticle() {
    _classCallCheck(this, RelatedArticle);

    return _possibleConstructorReturn(this, _getPrototypeOf(RelatedArticle).apply(this, arguments));
  }

  _createClass(RelatedArticle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var category = this.props.category;
      this.props.fetchrelatedcollections(category);
    }
  }, {
    key: "render",
    value: function render() {
      var related = this.props.related;
      return _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Headers.LeadTitle, null, " Related Articles "), related && related.map(function (item, index) {
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

  return RelatedArticle;
}(_react.default.Component);

RelatedArticle.propTypes = {
  category: _propTypes.default.string.isRequired,
  related: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    thumbnail_url: _propTypes.default.string.isRequired,
    votes: _propTypes.default.number.isRequired,
    category: _propTypes.default.string.isRequired,
    _id: _propTypes.default.string.isRequired
  })).isRequired,
  fetchrelatedcollections: _propTypes.default.func.isRequired
};

function mapStateToProps(state) {
  return {
    related: state.collections && state.collections.related
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  fetchrelatedcollections: _blogs.fetchrelatedcollections
})(RelatedArticle);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RelatedArticle, "RelatedArticle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/relatedArticle/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/relatedArticle/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/relatedArticle/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();