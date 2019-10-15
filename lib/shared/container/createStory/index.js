"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _blogs = require("../../actions/blogs");

var _InlineError = _interopRequireDefault(require("../../component/messages/InlineError"));

var _dropDown = _interopRequireDefault(require("../../lib/dropDown"));

var _Grid = require("../../lib/Grid");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  var data = _taggedTemplateLiteral(["\n  padding:12px 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-family:'Itim', cursive;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background-color:#eee;\n      border:none;\n      padding:12px 15px;\n      margin:0;\n      width:87vw;\n      font-size:20px;\n      font-weight:700;\n      white-space: pre-wrap;\n      height:30px;\n      overflow-y: hidden;\n      \n      /* CSS3 */\n      white-space: -moz-pre-wrap;\n      /* Firefox */\n      white-space: -pre-wrap;\n      /* Opera <7 */\n      white-space: -o-pre-wrap;\n      /* Opera 7 */\n      word-wrap: break-word;\n      /* IE */\n      font-family:'Itim', cursive;\n\n      @media only screen and (min-width:768px){\n        width:80%\n      }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background:white;\n  border: 1px solid #cecece; \n  padding: 8px 16px;\n  margin: 0 0 10px 0; \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color:#fdfaf5;\n  margin:0;\n  padding:2%;\n  overflow:hidden;\n  @media only screen and (min-width:768px){\n    padding:0 5%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SlateEditor = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../../component/slateEditor'));
    });
  },
  modules: ['../../component/slateEditor'],
  webpack: function webpack() {
    return [require.resolveWeak('../../component/slateEditor')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});

var Container = _styledComponents.default.div(_templateObject());

var SlateComponent = _styledComponents.default.div(_templateObject2());

var TitleInput = _styledComponents.default.textarea(_templateObject3());

var DropDownStyle = (0, _styledComponents.default)(_dropDown.default)(_templateObject4());
var DropdownExtendedColumn = (0, _styledComponents.default)(_Grid.Column)(_templateObject5());

var CreateStory =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateStory, _React$Component);

  function CreateStory() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateStory);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateStory)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      title: "",
      category: [{
        id: 0,
        title: 'Technology',
        selected: false,
        key: 'category'
      }, {
        id: 1,
        title: 'Business',
        selected: false,
        key: 'category'
      }, {
        id: 2,
        title: 'Programming',
        selected: false,
        key: 'category'
      }],
      selectedCategory: "",
      errors: {},
      open: false,
      blog_data: {
        title: "",
        category: "",
        description: "",
        blogdata_htmlstring: "",
        blogdata_string: ""
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (e) {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var toolbar = document.getElementById("toolbar");

      if (scrollTop > 50) {
        toolbar.style.position = 'fixed';
        toolbar.style.top = '90px';
      } else {
        toolbar.style.position = 'relative';
        toolbar.style.top = '0px';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      window.addEventListener("scroll", _this.handleScroll);
      setTimeout(function () {
        _this.init();
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      var allcategories = _this.props.allcategories;
      var all = [].concat(_toConsumableArray(allcategories.primary), _toConsumableArray(allcategories.other));
      var defaultcategory = all.map(function (item, index) {
        return {
          id: index,
          title: item,
          selected: false,
          key: 'category'
        };
      });

      _this.setState(_objectSpread({}, _this.state, {
        category: defaultcategory
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      window.removeEventListener("scroll", _this.handleScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (data) {
      data["title"] = _this.state.title;
      data["category"] = _this.state.selectedCategory;

      var errors = _this.validateStage1(data);

      _this.setState({
        errors: errors
      });

      if (Object.keys(errors).length === 0) {
        _this.setState({
          blog_data: _objectSpread({}, _this.state.blog_data, {
            title: data.title,
            category: _this.state.selectedCategory,
            description: _this.state.description,
            blogdata_htmlstring: data.blogdata_htmlstring,
            blogdata_string: data.blogdata_string
          })
        }, function () {
          this.handleClickOpen();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updatetitle", function (e) {
      e.preventDefault();

      _this.setState({
        title: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateOutline", function (e) {
      e.preventDefault();
      var desc = e.target.value;

      var errors = _this.validateStage2(desc);

      _this.setState({
        errors: errors
      });

      if (Object.keys(errors).length === 0) {
        _this.setState({
          blog_data: _objectSpread({}, _this.state.blog_data, {
            description: e.target.value
          })
        });
      } else {
        return;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSelected", function (id, key) {
      var _this$setState;

      var temp = _this.state[key]; //omit this for multiple selection

      temp = temp.map(function (item) {
        if (item.selected) item.selected = false;
        return item;
      });
      temp[id].selected = !temp[id].selected;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, key, temp), _defineProperty(_this$setState, "selectedCategory", temp[id].title), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOpen", function () {
      return _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      return _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submitBlog", function () {
      var data = _this.state.blog_data;
      var selectedCategory = _this.state.selectedCategory;
      data["description"] = data["description"];
      data["category"] = selectedCategory !== "" ? selectedCategory : "uncategorized";

      var errors = _this.validateStage3(data);

      _this.setState({
        errors: errors
      });

      if (Object.keys(errors).length === 0) {
        _this.props.createblogs(data).then(function () {
          return _this.props.history.push('/dashboard');
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validateStage1", function (data) {
      var errors = {};
      if (!data.blogdata_string) errors.blog_data = "oops! Content cannot be blank";
      if (!data.title) errors.title = "oops! Title cannot be blank";
      return errors;
    });

    _defineProperty(_assertThisInitialized(_this), "validateStage2", function (desc) {
      var errors = {};

      if (desc.length > 130) {
        errors.descriptionConstraint = "oops! Outline should be short and crispy";
      }

      return errors;
    });

    _defineProperty(_assertThisInitialized(_this), "validateStage3", function (data) {
      var errors = {};
      if (!data.blogdata_string) errors.blog_data = " oops! Content cannot be blank";
      if (!data.title) errors.title = "oops! Title cannot be blank";
      if (!data.description) errors.description = "oops! Outline cannot be blank";
      return errors;
    });

    return _this;
  }

  _createClass(CreateStory, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          title = _this$state.title,
          category = _this$state.category,
          errors = _this$state.errors,
          selectedCategory = _this$state.selectedCategory;
      return _react.default.createElement(Container, null, _react.default.createElement(_Grid.Row, null, _react.default.createElement(DropdownExtendedColumn, {
        xs: "12",
        sm: "6",
        md: "4",
        style: {
          float: 'right'
        }
      }, _react.default.createElement(DropDownStyle, {
        titleHelper: {
          "singular": selectedCategory,
          "plural": selectedCategory
        },
        title: "Select Category",
        list: category,
        toggleItem: this.toggleSelected,
        multipleSelection: false
      })), _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "6",
        md: "8"
      }, _react.default.createElement(TitleInput, {
        type: "text",
        id: "title",
        name: "title",
        value: title,
        placeholder: "Title",
        onChange: this.updatetitle
      }))), _react.default.createElement(_Grid.Row, null, _react.default.createElement(SlateComponent, null, _react.default.createElement("div", {
        style: {
          width: '100%',
          maxWidth: '87vw'
        }
      }, _react.default.createElement(SlateEditor, {
        submit: this.submit
      }))), errors.title && _react.default.createElement(_InlineError.default, {
        text: errors.title
      }), errors.blog_data && _react.default.createElement(_InlineError.default, {
        text: errors.blog_data
      })), _react.default.createElement(_Dialog.default, {
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, _react.default.createElement(_DialogTitle.default, {
        id: "form-dialog-title"
      }, "Outline"), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_DialogContentText.default, null, "Set an outline/description for your article to make it look outstanding ."), _react.default.createElement(_TextField.default, {
        autoFocus: true,
        id: "filled-textarea",
        label: "Outline",
        placeholder: "Write your outline within 130 letters",
        multiline: true,
        margin: "normal",
        variant: "filled",
        fullWidth: true,
        onChange: this.updateOutline,
        value: this.state.blog_data.description
      }), _react.default.createElement(_DialogContentText.default, null, errors.descriptionConstraint && _react.default.createElement(_InlineError.default, {
        text: errors.descriptionConstraint
      })), _react.default.createElement(_DialogContentText.default, null, errors.description && _react.default.createElement(_InlineError.default, {
        text: errors.description
      }))), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
        onClick: this.handleClose,
        color: "primary"
      }, "Cancel"), _react.default.createElement(_Button.default, {
        onClick: this.submitBlog,
        color: "primary"
      }, "Publish"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return CreateStory;
}(_react.default.Component);

CreateStory.propTypes = {
  history: _propTypes.default.shape({
    push: _propTypes.default.func.isRequired
  }).isRequired,
  allcategories: _propTypes.default.shape({
    primary: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
    other: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
  }).isRequired,
  createblogs: _propTypes.default.func.isRequired
};

function mapStateToProps(state) {
  return {
    allcategories: state.theme && state.theme.allcategories
  };
}

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  createblogs: _blogs.createblogs
})(CreateStory));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SlateEditor, "SlateEditor", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
  reactHotLoader.register(Container, "Container", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
  reactHotLoader.register(SlateComponent, "SlateComponent", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
  reactHotLoader.register(TitleInput, "TitleInput", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
  reactHotLoader.register(DropDownStyle, "DropDownStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
  reactHotLoader.register(DropdownExtendedColumn, "DropdownExtendedColumn", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
  reactHotLoader.register(CreateStory, "CreateStory", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/container/createStory/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();