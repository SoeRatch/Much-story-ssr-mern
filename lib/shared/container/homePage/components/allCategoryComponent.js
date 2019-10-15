"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carouselbutton = _interopRequireDefault(require("../../../lib/buttons/carouselbutton"));

var _Headers = require("../../../lib/Headers");

var _blogs = require("../../../actions/blogs");

var _Grid = require("../../../lib/Grid");

var _reactRouterDom = require("react-router-dom");

var _Card = require("../../../lib/Card");

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  margin:0;\n  white-space: nowrap;\n  overflow:hidden;\n  padding:3%;\n"]);

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

var AllCategoryComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllCategoryComponent, _React$Component);

  function AllCategoryComponent() {
    _classCallCheck(this, AllCategoryComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(AllCategoryComponent).apply(this, arguments));
  }

  _createClass(AllCategoryComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          title = _this$props.title;
      return _react.default.createElement("div", {
        style: {
          backgroundImage: 'linear-gradient(rgba(0,0,0,0) 0%, #fdfaf5 10%)',
          margin: '0',
          width: '100vw'
        }
      }, _react.default.createElement("div", {
        style: {
          margin: '0',
          padding: '0 4%',
          paddingTop: '5%'
        }
      }, _react.default.createElement(_Headers.LeadTitle, null, title)), _react.default.createElement(Container, null, _react.default.createElement(_Grid.Row, {
        margin_bottom: "15px"
      }, data && data[0] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "4",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[0].username, "/").concat(data[0].title.split(' ').join('-'), "-").concat(data[0]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          backgroundImage: "url(".concat(data[0].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[0].category)), _react.default.createElement(_Card.CardTitle, null, data[0].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[0].username), _react.default.createElement(_Card.CardView, null, data[0].description)))), data && data[1] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "4",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[1].username, "/").concat(data[1].title.split(' ').join('-'), "-").concat(data[1]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          backgroundImage: "url(".concat(data[1].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[1].category)), _react.default.createElement(_Card.CardTitle, null, data[1].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[1].username), _react.default.createElement(_Card.CardView, null, data[1].description)))), data && data[2] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "12",
        md: "4",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[2].username, "/").concat(data[2].title.split(' ').join('-'), "-").concat(data[2]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          backgroundImage: "url(".concat(data[2].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[2].category)), _react.default.createElement(_Card.CardTitle, null, data[2].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[2].username), _react.default.createElement(_Card.CardView, null, data[2].description))))), _react.default.createElement(_Grid.Row, {
        margin_bottom: "50px"
      }, data && data[3] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "4",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[3].username, "/").concat(data[3].title.split(' ').join('-'), "-").concat(data[3]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          backgroundImage: "url(".concat(data[3].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[3].category)), _react.default.createElement(_Card.CardTitle, null, data[3].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[3].username), _react.default.createElement(_Card.CardView, null, data[3].description)))), data && data[4] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "8",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[4].username, "/").concat(data[4].title.split(' ').join('-'), "-").concat(data[4]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          height: '68%',
          backgroundImage: "url(".concat(data[4].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[4].category)), _react.default.createElement(_Card.CardTitle, null, data[4].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[4].username))))), _react.default.createElement(_Grid.Row, {
        margin_bottom: "15px"
      }, data && data[5] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "4",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[5].username, "/").concat(data[5].title.split(' ').join('-'), "-").concat(data[5]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          backgroundImage: "url(".concat(data[5].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[5].category)), _react.default.createElement(_Card.CardTitle, null, data[5].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[5].username), _react.default.createElement(_Card.CardView, null, data[5].description)))), data && data[6] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "4",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[6].username, "/").concat(data[6].title.split(' ').join('-'), "-").concat(data[6]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          backgroundImage: "url(".concat(data[6].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[6].category)), _react.default.createElement(_Card.CardTitle, null, data[6].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[6].username), _react.default.createElement(_Card.CardView, null, data[6].description)))), data && data[7] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "12",
        md: "4",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[7].username, "/").concat(data[7].title.split(' ').join('-'), "-").concat(data[7]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          backgroundImage: "url(".concat(data[7].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[7].category)), _react.default.createElement(_Card.CardTitle, null, data[7].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[7].username), _react.default.createElement(_Card.CardView, null, data[7].description))))), _react.default.createElement(_Grid.Row, {
        margin_bottom: "50px"
      }, data && data[8] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "8",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[8].username, "/").concat(data[8].title.split(' ').join('-'), "-").concat(data[8]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          height: '68%',
          backgroundImage: "url(".concat(data[8].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[8].category)), _react.default.createElement(_Card.CardTitle, null, data[8].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[8].username)))), data && data[9] && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "4",
        style: {
          height: '600px'
        }
      }, _react.default.createElement(_Card.CardContainer, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(data[9].username, "/").concat(data[9].title.split(' ').join('-'), "-").concat(data[9]._id),
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_Card.ImageWrapper, {
        style: {
          backgroundImage: "url(".concat(data[9].thumbnail_url, ")")
        }
      }), _react.default.createElement(_Card.TagBox, null, _react.default.createElement("span", {
        style: {
          display: 'block'
        }
      }, data[9].category)), _react.default.createElement(_Card.CardTitle, null, data[9].title), _react.default.createElement(_Card.CardMeta, null, "By ", data[9].username), _react.default.createElement(_Card.CardView, null, data[9].description)))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AllCategoryComponent;
}(_react.default.Component);

AllCategoryComponent.propTypes = {
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
var _default = AllCategoryComponent;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Container, "Container", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/homePage/components/allCategoryComponent.js");
  reactHotLoader.register(AllCategoryComponent, "AllCategoryComponent", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/homePage/components/allCategoryComponent.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/homePage/components/allCategoryComponent.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();