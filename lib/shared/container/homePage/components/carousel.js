"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n width: 10px;\n  height: 10px;\n  border-style: solid;\n  border-color:white;\n  border-style: double;\n  border-width: 0px 0px 0px 10px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 5px;\n  height: 5px;\n  border-style: solid;\n  border-width: 5px 0px 5px 10px;\n  border-color: transparent transparent transparent white;\n  box-sizing: border-box;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    height: 10px;\n    background: white;\n    border-radius: 10px;\n    display: inline-block;\n    box-shadow: 0 0 5px 0 rgba(0,0,0,.4);\n    width:20px\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    height: 10px;\n    width: 10px;\n    background: white;\n    opacity:0.8;\n\n    border-radius: 10px;\n    display: inline-block;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n   position:absolute;\n    left:50%;\n    bottom:7%;\n    width:20%;\n    z-index:1;\n    margin-left:-10%;\n    display:flex;\n    justify-content:space-between;\n\n\n    @media only screen and (min-width:768px){\n      width:10%;\n      margin-left:-5%;\n    }\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 12px;\n\n transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 12px;\n\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  width:100vw;\n  height:60vh;\n  margin:20px 0 0 0;\n  padding:0;\n  white-space: nowrap;\n  overflow: hidden;\n  @media only screen and (min-width:768px){\n       margin:0;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding:0 25px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      position:absolute;\n      background:rgba(0,0,0,0.2);\n      width:100%;\n      top:50%;\n      margin:-10% 0 0 0;\n      text-align:center;\n      text-transform:uppercase;\n      font-family:'Itim', cursive;\n      color:white;\n      font-size:calc(0.735rem + 1.6vw);\n      letter-spacing:0.1em;\n      -webkit-font-smoothing: antialiased;\n\n      white-space: pre-wrap;\n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n      vertical-align: middle;\n\n      @media only screen and (min-width:768px){\n         margin:-5% 0 0 0;\n         \n      }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      width:100%;\n      height:100%;\n      margin:0 auto;\n      background-size:cover;\n      background-repeat:no-repeat;\n      background-position:center;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display:inline-block;\n    width:100%;\n    height: 100%; \n    overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SlideStyle = _styledComponents.default.div(_templateObject());

var ImgContainer = _styledComponents.default.div(_templateObject2());

var TextContainer = _styledComponents.default.div(_templateObject3());

var TextStyle = _styledComponents.default.p(_templateObject4());

var Slide = function Slide(_ref) {
  var item = _ref.item;
  var styles = {
    backgroundImage: "url(".concat(item.bg_image, ")")
  };
  return _react.default.createElement(SlideStyle, {
    className: "slidecarousel"
  }, _react.default.createElement(ImgContainer, {
    style: styles
  }, _react.default.createElement(TextContainer, null, item && item.text && item.text.map(function (text, index) {
    return _react.default.createElement(TextStyle, {
      key: index,
      styletype: item.style,
      index: index
    }, text);
  }))));
};

var Container = _styledComponents.default.div(_templateObject5());

var SliderWrapper = _styledComponents.default.div(_templateObject6());

var ArrowLeftStyle = _styledComponents.default.i(_templateObject7());

var ArrowRightStyle = _styledComponents.default.i(_templateObject8());

var DotWrapper = _styledComponents.default.div(_templateObject9());

var Dot = _styledComponents.default.div(_templateObject10());

var ActiveDot = _styledComponents.default.div(_templateObject11());

var PlayButton = _styledComponents.default.div(_templateObject12());

var PauseButton = _styledComponents.default.div(_templateObject13());

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentIndex: 0,
      translateValue: 0,
      pause: false
    });

    _defineProperty(_assertThisInitialized(_this), "startlooping", function () {
      var imglen = _this.props.carousel.length;

      if (_this.state.currentIndex === imglen - 1) {
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
      var imglen = _this.props.carousel.length;

      if (_this.state.currentIndex === imglen - 1) {
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

    _defineProperty(_assertThisInitialized(_this), "selectSlide", function (e, i) {
      e.preventDefault();
      var diff = i - _this.state.currentIndex;

      _this.setState({
        currentIndex: i,
        translateValue: _this.state.translateValue - diff * _this.slideWidth()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "slideWidth", function () {
      var element = document.querySelector('.slidecarousel');
      return element.clientWidth;
    });

    _defineProperty(_assertThisInitialized(_this), "playpause", function (e) {
      e.preventDefault();
      if (!_this.state.pause) clearInterval(_this._interval);else _this._interval = setInterval(function () {
        return _this.startlooping();
      }, 4000);

      _this.setState({
        pause: !_this.state.pause
      });
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._interval = setInterval(function () {
        return _this2.startlooping();
      }, 4000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this._interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var carousel = this.props.carousel;
      return _react.default.createElement(Container, null, _react.default.createElement(DotWrapper, null, !this.state.pause && _react.default.createElement(PauseButton, {
        onClick: this.playpause
      }), this.state.pause && _react.default.createElement(PlayButton, {
        onClick: this.playpause
      }), this.props.carousel && this.props.carousel.map(function (item, i) {
        if (i === _this3.state.currentIndex) return _react.default.createElement(ActiveDot, {
          key: i
        });else return _react.default.createElement(Dot, {
          key: i,
          onClick: function onClick(e) {
            return _this3.selectSlide(e, i);
          }
        });
      })), _react.default.createElement(SliderWrapper, {
        style: {
          transform: "translateX(".concat(this.state.translateValue, "px)"),
          transition: 'transform ease-out 0.45s'
        }
      }, this.props.carousel && this.props.carousel.map(function (item, i) {
        return _react.default.createElement(Slide, {
          key: i,
          item: item
        });
      })), _react.default.createElement("div", {
        onClick: this.previousSlide,
        style: {
          position: 'absolute',
          top: '50%',
          margin: '-2% 0 0 3%'
        }
      }, _react.default.createElement(ArrowLeftStyle, null)), _react.default.createElement("div", {
        onClick: this.nextSlide,
        style: {
          position: 'absolute',
          top: '50%',
          right: '0',
          margin: '-2% 4% 0 0'
        }
      }, _react.default.createElement(ArrowRightStyle, null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Carousel;
}(_react.default.Component);

Carousel.propTypes = {
  carousel: _propTypes.default.array.isRequired
};
var _default = Carousel;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SlideStyle, "SlideStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(ImgContainer, "ImgContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(TextContainer, "TextContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(TextStyle, "TextStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(Slide, "Slide", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(Container, "Container", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(SliderWrapper, "SliderWrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(ArrowLeftStyle, "ArrowLeftStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(ArrowRightStyle, "ArrowRightStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(DotWrapper, "DotWrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(Dot, "Dot", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(ActiveDot, "ActiveDot", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(PlayButton, "PlayButton", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(PauseButton, "PauseButton", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(Carousel, "Carousel", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/components/carousel.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();