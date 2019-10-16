"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _carouselbutton = _interopRequireDefault(require("../../../lib/buttons/carouselbutton"));

var _Headers = require("../../../lib/Headers");

var _blogs = require("../../../actions/blogs");

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
  var data = _taggedTemplateLiteral(["\n      width:80%;\n      height:30%;\n      margin:0 auto;\n      overflow: hidden;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background-size:cover;\n    background-repeat:no-repeat;\n    background-position:center;\n    width:100%;\n    height:100%;\n    transition:all 0.3s ease-in-out 0s;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      width:80%;\n      height:70%;\n      border-radius:15px;\n      margin:0 auto;\n      overflow: hidden;\n\n      &:hover .im{\n        transform: scale(1.2);\n      }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display:inline-block;\n    height: 100%; \n    overflow: hidden;\n\n    ", ";\n\n    @media only screen and (min-width:768px){\n      ", ";\n    }\n\n    @media only screen and (min-width:992px){\n      ", ";\n    }\n\n    @media only screen and (min-width:1200){\n      ", ";\n    }\n\n    h4{\n      white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  width:100vw;\n  height:50vh;\n  margin:0;\n  padding:0;\n  white-space: nowrap;\n  overflow:hidden;\n\n"]);

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

var SliderWrapper = _styledComponents.default.div(_templateObject2());

function getWidthString(span) {
  if (!span) return;
  var width = span / 12 * 100;
  return "width:".concat(width, "%;");
}

var SlideStyle = _styledComponents.default.div(_templateObject3(), function (_ref) {
  var xs = _ref.xs;
  return xs ? getWidthString(xs) : "width:100%";
}, function (_ref2) {
  var sm = _ref2.sm;
  return sm && getWidthString(sm);
}, function (_ref3) {
  var md = _ref3.md;
  return md && getWidthString(md);
}, function (_ref4) {
  var lg = _ref4.lg;
  return lg && getWidthString(lg);
});

var ImgContainer = _styledComponents.default.div(_templateObject4());

var ImageWrapper = _styledComponents.default.div(_templateObject5());

var HeaderContainer = _styledComponents.default.div(_templateObject6());

var Slide = function Slide(_ref5) {
  var blogdetail = _ref5.blogdetail;
  var styles = {
    backgroundImage: "url(".concat(blogdetail.thumbnail_url, ")")
  };
  return _react.default.createElement(SlideStyle, {
    sm: "4",
    className: "slide"
  }, _react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(blogdetail.username, "/").concat(blogdetail.title.split(' ').join('-'), "-").concat(blogdetail._id),
    style: {
      textDecoration: 'none'
    }
  }, _react.default.createElement(ImgContainer, null, _react.default.createElement(ImageWrapper, {
    style: styles,
    className: "im"
  })), _react.default.createElement(HeaderContainer, null, _react.default.createElement("h4", {
    style: {
      textAlign: 'left',
      color: 'black'
    }
  }, blogdetail.title))));
};

var SlidingComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SlidingComponent, _React$Component);

  function SlidingComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SlidingComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SlidingComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentIndex: 0,
      translateValue: 0
    });

    _defineProperty(_assertThisInitialized(_this), "previousSlide", function (e) {
      e.preventDefault();
      console.log("clicked");
      if (_this.state.currentIndex === 0) return;

      _this.setState({
        currentIndex: _this.state.currentIndex - 1,
        translateValue: _this.state.translateValue + _this.slideWidth()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextSlide", function (e) {
      e.preventDefault();
      console.log("clicked");
      var imglen = _this.props.data.length;

      if (_this.state.currentIndex === imglen - 3) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }

      _this.setState({
        currentIndex: _this.state.currentIndex + 1,
        translateValue: _this.state.translateValue - _this.slideWidth()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "slideWidth", function () {
      return document.querySelector('.slide').clientWidth;
    });

    return _this;
  }

  _createClass(SlidingComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          data = _this$props.data;
      return _react.default.createElement("div", {
        style: {
          backgroundColor: '#fdfaf5',
          margin: '0',
          marginTop: '-38px',
          padding: '0'
        }
      }, _react.default.createElement("div", {
        style: {
          margin: '0',
          padding: '0 4%',
          paddingTop: '5%'
        }
      }, _react.default.createElement(_Headers.LeadTitle, null, title)), _react.default.createElement(Container, null, _react.default.createElement(SliderWrapper, {
        style: {
          transform: "translateX(".concat(this.state.translateValue, "px)"),
          transition: 'transform ease-out 0.45s'
        }
      }, data && data.map(function (item, i) {
        return _react.default.createElement(Slide, {
          key: i,
          blogdetail: item
        });
      })), _react.default.createElement("div", {
        onClick: this.previousSlide,
        style: {
          position: 'absolute',
          top: '50%',
          margin: '-6% 0 0 1%'
        }
      }, _react.default.createElement(_carouselbutton.default, {
        direction: "left",
        style: {
          position: 'absolute'
        }
      })), _react.default.createElement("div", {
        onClick: this.nextSlide,
        style: {
          position: 'absolute',
          top: '50%',
          right: '0',
          margin: '-6% 1% 0 0'
        }
      }, _react.default.createElement(_carouselbutton.default, {
        direction: "right",
        style: {
          position: 'absolute'
        }
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

  return SlidingComponent;
}(_react.default.Component);

SlidingComponent.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    thumbnail_url: _propTypes.default.string.isRequired,
    votes: _propTypes.default.number.isRequired,
    category: _propTypes.default.string.isRequired,
    _id: _propTypes.default.string.isRequired
  })).isRequired
};
var _default = SlidingComponent;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Container, "Container", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(SliderWrapper, "SliderWrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(getWidthString, "getWidthString", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(SlideStyle, "SlideStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(ImgContainer, "ImgContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(ImageWrapper, "ImageWrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(HeaderContainer, "HeaderContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(Slide, "Slide", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(SlidingComponent, "SlidingComponent", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/slidingComponent.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();