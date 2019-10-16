"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _blogs = require("../../actions/blogs");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Notes = _interopRequireDefault(require("@material-ui/icons/Notes"));

var _LocalOffer = _interopRequireDefault(require("@material-ui/icons/LocalOffer"));

var _reactLazyload = _interopRequireDefault(require("react-lazyload"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _relatedArticle = _interopRequireDefault(require("../../component/relatedArticle"));

var _Grid = require("../../lib/Grid");

var _config = require("../../config");

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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background:rgba(121, 210, 206,0.8);\n  padding:1em;\n  margin-top:2em;\n  border-radius:10px;\n  color:#334;\n  text-align:center;  \n  font-family:'Itim', cursive;\n  line-height:1.5;\n  font-size:1.5em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background:rgba(121, 210, 206,0.8);\n  padding:1em;\n  margin:0;\n  list-style:none;\n  font-size:1.1em;\n  border-radius:10px;\n  color:#334;\n  li{\n    font-family:'Itim', cursive;\n    line-height:1.5;\n    display:flex;\n    align-items:center;\n  }\n\n  @media only screen and (min-width:768px){\n      padding:1em;\n      margin:2em 0 0.2em 2em;\n    }\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align:center;\n\n  h1{\n      margin-top:10px;\n      font-family:'Itim', cursive;\n      color:#334;\n      text-transform:uppercase;\n      font-size:calc(0.935rem + 1.6vw);\n      letter-spacing:0.1em;\n      -webkit-font-smoothing: antialiased;\n  }\n\n  h3{\n      text-transform:uppercase;\n      font-family: proxima-nova,Proxima Nova,sans-serif;\n      font-size:calc(14px + .50vw);\n      color:rgb(121, 210, 206);\n  }\n\n  span{\n    text-transform:uppercase;\n    font-family:'Gentium Book Basic', serif;\n    font-size: calc(14px + .25vw);\n    color:#665;\n  }\n\n   @media only screen and (min-width:768px){\n      text-align:left;\n      h1{\n        font-size:calc(1.635rem + 1.6vw);\n      }\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  line-height: calc(1.6em + .21vw);\n  font-family:'Gentium Book Basic', serif;\n  font-size: calc(18px + .25vw);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    top:0;\n    height:500px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  margin-top:20px;\n  white-space: nowrap;\n  overflow:hidden;\n  padding:3%;\n  white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n"]);

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

var ProfileImgWrapper = _styledComponents.default.div(_templateObject2());

var BlogContent = _styledComponents.default.div(_templateObject3());

var HeaderStyle = _styledComponents.default.div(_templateObject4());

var BlogInfoStyle = _styledComponents.default.ul(_templateObject5());

var CommentActionStyle = _styledComponents.default.div(_templateObject6());

var BlogPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogPage, _React$Component);

  function BlogPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BlogPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BlogPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mobileOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.onInit(_this.props);

      window.addEventListener("scroll", _this.handleScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      window.removeEventListener("scroll", _this.handleScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (e) {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var topbarObject = document.getElementById("topbar");

      if (scrollTop > 50) {
        topbarObject.style.position = "relative";
      } else {
        topbarObject.style.position = "fixed";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onInit", function (props) {
      props.fetchblog(props.match.params.blogparam);
      window.scrollTo(0, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "dateFormatter", function (datestring) {
      var date = new Date(datestring);
      return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
      }).format(date);
    });

    return _this;
  }

  _createClass(BlogPage, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.match.params.blogparam !== nextProps.match.params.blogparam) {
        this.onInit(nextProps);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var blog = this.props.blog;
      return _react.default.createElement("div", {
        style: {
          margin: '0',
          width: '100%'
        }
      }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, "".concat(blog && blog.title)), _react.default.createElement("meta", {
        name: "description",
        content: blog && blog.description
      })), _react.default.createElement(Container, null, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "12",
        md: "2.5"
      }, _react.default.createElement(_Hidden.default, {
        smDown: true,
        implementation: "css"
      }, _react.default.createElement("div", {
        style: {
          padding: '20%',
          paddingLeft: '0'
        }
      }, _react.default.createElement(ProfileImgWrapper, {
        style: {
          backgroundImage: "url(https://res.cloudinary.com/surajsharma/image/upload/v1569877316/muchstoryimages/backgroundforprofile.jpg)"
        }
      })))), _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "12",
        md: "9.5"
      }, _react.default.createElement(HeaderStyle, null, _react.default.createElement("span", null, blog && blog.createdAt && this.dateFormatter(blog.createdAt)), _react.default.createElement("h1", null, blog && blog.title), _react.default.createElement("h3", null, "By ", blog && blog.username))), _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "12",
        md: "2.8",
        style: {
          float: 'right'
        }
      }, _react.default.createElement(BlogInfoStyle, null, _react.default.createElement("li", null, _react.default.createElement(_Notes.default, null), _react.default.createElement("span", {
        style: {
          marginLeft: '5px'
        }
      }, blog && blog.humanized_duration, " read")), _react.default.createElement("li", null, _react.default.createElement(_LocalOffer.default, null), _react.default.createElement("span", {
        style: {
          marginLeft: '5px'
        }
      }, blog && blog.category)))), _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "12",
        md: "6.5"
      }, _react.default.createElement(BlogContent, {
        dangerouslySetInnerHTML: {
          __html: blog && blog.blogdata_htmlstring
        }
      }), _react.default.createElement(_reactRouterDom.Link, {
        to: "/blog/".concat(blog && blog._id, "/comments/show"),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(CommentActionStyle, null, "View Comments")))), blog && blog.category && _react.default.createElement(_reactLazyload.default, {
        height: 200,
        offset: 100
      }, _react.default.createElement(_relatedArticle.default, {
        category: blog.category
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

  return BlogPage;
}(_react.default.Component);

BlogPage.propTypes = {
  blog: _propTypes.default.object.isRequired,
  fetchblog: _propTypes.default.func.isRequired,
  match: _propTypes.default.shape({
    params: _propTypes.default.shape({
      username: _propTypes.default.string.isRequired,
      blogparam: _propTypes.default.string.isRequired
    }).isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    blog: state.blog
  };
}

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  fetchblog: _blogs.fetchblog
})(BlogPage));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Container, "Container", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
  reactHotLoader.register(ProfileImgWrapper, "ProfileImgWrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
  reactHotLoader.register(BlogContent, "BlogContent", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
  reactHotLoader.register(HeaderStyle, "HeaderStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
  reactHotLoader.register(BlogInfoStyle, "BlogInfoStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
  reactHotLoader.register(CommentActionStyle, "CommentActionStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
  reactHotLoader.register(BlogPage, "BlogPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/blogPage/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();