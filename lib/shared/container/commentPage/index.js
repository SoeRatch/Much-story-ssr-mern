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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommentEditor = _interopRequireDefault(require("../../component/slateEditor/CommentEditor"));

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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 1px 4px rgba(0,0,0,0.1);\n  padding:5px;\n  white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n\n  font-size:calc(0.8em + .15vw);\n  @media only screen and (min-width:768px){\n    font-size:13px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background:white;\n  border:1px solid rgba(0,0,0,0.9);\n  box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n  padding:1em;\n  margin-top:2em;\n  border-radius:2px;\n  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width:100%;\n  margin:0 auto;\n  @media only screen and (min-width:768px){\n    width:50%;\n  }\n\n  \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background:rgba(121, 210, 206,0.1);\n    padding:20px;\n     h4{\n      font-family: proxima-nova,Proxima Nova,sans-serif;\n      font-size: calc(14px + .25vw);\n      color:#665;\n    }\n\n    .username{\n       text-transform:uppercase;\n      font-family: proxima-nova,Proxima Nova,sans-serif;\n      font-size:calc(14px + .25vw);\n      color:#FF4B2B;\n      }\n\n    .date{\n        text-transform:uppercase;\n        font-family:proxima-nova,Proxima Nova,sans-serif;\n        font-size: calc(10px + .15vw);\n        color:#665;\n        margin-top:0px;\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding:20px;\n    b{\n        font-family:'Itim', cursive;\n        color:#334;\n        text-transform:uppercase;\n    }\n    p{\n      font-family:Poppins,Helvetica,Arial,sans-serif;\n      font-size: calc(14px + .20vw);\n      color:#665;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var HeaderStyle = _styledComponents.default.div(_templateObject());

var BodyStyle = _styledComponents.default.div(_templateObject2());

var InnerContainer = _styledComponents.default.div(_templateObject3());

var BoxContainer = _styledComponents.default.div(_templateObject4());

var CommentContent = _styledComponents.default.div(_templateObject5());

var CommentPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommentPage, _React$Component);

  function CommentPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommentPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommentPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      return _this.setState({
        data: _objectSpread({}, _this.state.data, _defineProperty({}, e.target.name, e.target.value))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (data) {
      var bundleddata = {
        comment: data,
        blogid: _this.props.match.params.blogid
      };

      _this.props.createComment(bundleddata);
    });

    _defineProperty(_assertThisInitialized(_this), "onInit", function (props) {
      props.fetchcomments(_this.props.match.params.blogid);
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

  _createClass(CommentPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          comments = _this$props.comments,
          blog = _this$props.blog;
      var id_from_param = this.props.match.params.blogid;
      return _react.default.createElement("div", {
        style: {
          margin: '0',
          width: '100%'
        }
      }, _react.default.createElement(HeaderStyle, null, _react.default.createElement(InnerContainer, null, _react.default.createElement(BoxContainer, null, _react.default.createElement("b", null, blog && blog.title), _react.default.createElement("p", null, " By ", blog && blog.username, " ")))), _react.default.createElement(BodyStyle, null, _react.default.createElement(InnerContainer, null, _react.default.createElement(BoxContainer, null, _react.default.createElement(_CommentEditor.default, {
        submit: this.submit
      }))), _react.default.createElement(InnerContainer, null, _react.default.createElement("h4", null, "Comments"), comments && comments.map(function (comment, index) {
        return _react.default.createElement(BoxContainer, {
          key: index
        }, _react.default.createElement("h4", {
          className: "username"
        }, comment.username), _react.default.createElement("p", {
          className: "date"
        }, _this2.dateFormatter(comment.createdAt), " "), _react.default.createElement(CommentContent, {
          dangerouslySetInnerHTML: {
            __html: comment.comment_string
          }
        }));
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

  return CommentPage;
}(_react.default.Component);

CommentPage.propTypes = {
  blog: _propTypes.default.object.isRequired,
  fetchcomments: _propTypes.default.func.isRequired,
  match: _propTypes.default.shape({
    params: _propTypes.default.shape({
      blogid: _propTypes.default.string.isRequired
    }).isRequired
  }).isRequired,
  comments: _propTypes.default.arrayOf(_propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    comment_string: _propTypes.default.string.isRequired,
    userId: _propTypes.default.string.isRequired,
    blogId: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired,
    votes: _propTypes.default.number.isRequired,
    createdAt: _propTypes.default.string.isRequired,
    updatedAt: _propTypes.default.string.isRequired
  })).isRequired
};

function mapStateToProps(state) {
  return {
    blog: state.blog,
    comments: state.comments
  };
}

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  createComment: _blogs.createComment,
  fetchcomments: _blogs.fetchcomments
})(CommentPage));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HeaderStyle, "HeaderStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/commentPage/index.js");
  reactHotLoader.register(BodyStyle, "BodyStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/commentPage/index.js");
  reactHotLoader.register(InnerContainer, "InnerContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/commentPage/index.js");
  reactHotLoader.register(BoxContainer, "BoxContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/commentPage/index.js");
  reactHotLoader.register(CommentContent, "CommentContent", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/commentPage/index.js");
  reactHotLoader.register(CommentPage, "CommentPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/commentPage/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/commentPage/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/commentPage/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();