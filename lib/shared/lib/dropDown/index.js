"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CheckCircleOutline = _interopRequireDefault(require("@material-ui/icons/CheckCircleOutline"));

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t  padding: 10px 20px;\n\t  cursor: pointer;\n\t  white-space: nowrap;\n\t  display:flex;\n    align-items:center;\n\t  &:hover{\n\t  \tbackground-color: #f6f6f6;\n\t  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\tposition: absolute;\n\t\tz-index:900;\n\t    top: 100%;\n\t    border: 1px solid #ccc;\n\t    border-radius: 4px;\n\t    padding: 0;\n\t    margin: 2px 0 0 0;\n\t    box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);\n\t    background-color: #ffffff;\n\t    list-style-type: none;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t  display: inline-block;\n\t  border: 1px solid gray;\n\t  border-radius: 4px;\n\t  padding:5px 15px 5px 10px;\n\t  background-color: #ffffff;\n\t  cursor: pointer;\n\t  white-space: nowrap;\n\n\t  &::after{\n\t  \t  content: '';\n\t\t  position: absolute;\n\t\t  top: 50%;\n\t\t  right: 15px;\n\t\t  transform: translateY(-50%);\n\t\t  width: 0; \n\t\t  height: 0; \n\t\t  border-left: 5px solid transparent;\n\t\t  border-right: 5px solid transparent;\n\t\t  /*border-top: 5px solid black;*/\n\t  }\n\n\t  &:hover{\n\t  \tbackground-color: #eeeeee;\n\t  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n  \tposition: relative;\n  \tfont-family:'Itim', cursive;\n  \t\n  \t@media only screen and (min-width:768px){\n    \tfloat:right;\n  \t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var DropDownStyle = _styledComponents.default.div(_templateObject());

var DropDownButton = _styledComponents.default.div(_templateObject2());

var DropDownMenu = _styledComponents.default.ul(_templateObject3());

var DropDownList = _styledComponents.default.li(_templateObject4());

var DropDown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropDown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      listOpen: false,
      headerTitle: _this.props.title
    });

    return _this;
  }

  _createClass(DropDown, [{
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.setState({
        listOpen: false
      });
    }
  }, {
    key: "toggleList",
    value: function toggleList() {
      this.setState(function (prevState) {
        return {
          listOpen: !prevState.listOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          list = _this$props.list,
          toggleItem = _this$props.toggleItem;
      var _this$state = this.state,
          listOpen = _this$state.listOpen,
          headerTitle = _this$state.headerTitle;
      return _react.default.createElement(DropDownStyle, null, _react.default.createElement(DropDownButton, {
        onClick: function onClick() {
          return _this2.toggleList();
        }
      }, _react.default.createElement("span", null, headerTitle), listOpen ? _react.default.createElement("i", {
        className: "fa fa-angle-up"
      }) : _react.default.createElement("i", {
        className: "fa fa-angle-down"
      })), listOpen && _react.default.createElement(DropDownMenu, null, list && list.map(function (item) {
        return _react.default.createElement(DropDownList, {
          key: item.title,
          onClick: function onClick() {
            return toggleItem(item.id, item.key);
          }
        }, item.title, " ", item.selected && _react.default.createElement(_CheckCircleOutline.default, null));
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var count = nextProps.list.filter(function (a) {
        return a.selected;
      }).length;

      if (count === 0) {
        return {
          headerTitle: nextProps.title
        };
      } else if (count === 1) {
        if (!nextProps.multipleSelection) return {
          headerTitle: "".concat(nextProps.titleHelper.singular)
        };
        return {
          headerTitle: "".concat(count, " ").concat(nextProps.titleHelper.singular)
        };
      } else if (count > 1) {
        return {
          headerTitle: "".concat(count, " ").concat(nextProps.titleHelper.plural)
        };
      }
    }
  }]);

  return DropDown;
}(_react.default.Component);

var _default = DropDown;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DropDownStyle, "DropDownStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/dropDown/index.js");
  reactHotLoader.register(DropDownButton, "DropDownButton", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/dropDown/index.js");
  reactHotLoader.register(DropDownMenu, "DropDownMenu", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/dropDown/index.js");
  reactHotLoader.register(DropDownList, "DropDownList", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/dropDown/index.js");
  reactHotLoader.register(DropDown, "DropDown", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/dropDown/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/lib/dropDown/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();