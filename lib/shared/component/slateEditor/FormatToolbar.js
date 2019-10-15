"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkButtonLink = exports.ToolbarButtonDump = exports.ToolbarButton = exports.MarkButton = exports.HeaderDropDown = exports.FormatToolbar = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    overflow:hidden;\n    padding:2px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tborder-bottom: solid 1.7px rgba(199,198,255,0.15);\n\tbackground:rgb(121, 210, 206);\n  position:relative;\n  width:inherit;\n  max-width:inherit;\n  z-index:1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var FormatToolbarStyle = _styledComponents.default.div(_templateObject());

var DropDownStyle = _styledComponents.default.div(_templateObject2());

var FormatToolbar = function FormatToolbar(props) {
  return _react.default.createElement(FormatToolbarStyle, {
    id: "toolbar"
  }, _react.default.createElement("div", {
    style: {
      padding: '10px 5px'
    }
  }, props.children));
};

exports.FormatToolbar = FormatToolbar;

var HeaderDropDown = function HeaderDropDown(props) {
  return _react.default.createElement(DropDownStyle, null, _react.default.createElement("button", {
    style: {
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      backgroundColor: 'inherit',
      letterSpacing: '2px',
      fontSize: '1.2em'
    },
    onClick: function onClick(e) {
      e.preventDefault;
      var el = document.getElementById('dropdownbtn');
      if (el.style.display == 'block') el.style.display = 'none';else el.style.display = 'block';
    }
  }, props.header, _react.default.createElement(_ArrowDropDown.default, null)), _react.default.createElement("ul", {
    id: "dropdownbtn",
    style: {
      position: 'absolute',
      display: 'none',
      background: 'white',
      border: '1px solid #cecece',
      listStyle: 'none',
      zIndex: '2',
      padding: '15px',
      margin: '5px'
    },
    onClick: function onClick(e) {
      var el = document.getElementById('dropdownbtn');
      el.style.display = 'none';
    }
  }, props.children && props.children.map(function (child, index) {
    return _react.default.createElement("li", {
      key: "dropdown-".concat(index)
    }, child);
  })));
};

exports.HeaderDropDown = HeaderDropDown;

var MarkButton = function MarkButton(_ref) {
  var editor = _ref.editor,
      type = _ref.type,
      icon = _ref.icon;
  var value = editor.value;
  var isActive = value.activeMarks.some(function (mark) {
    return mark.type === type;
  });
  return _react.default.createElement("div", {
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      editor.toggleMark(type);
    },
    style: {
      float: 'left',
      cursor: 'pointer',
      color: 'black',
      backgroundColor: "".concat(isActive ? '#e4e4e4' : 'rgb(121, 210, 206)'),
      padding: '0 5px'
    }
  }, typeof icon.component === "string" ? _react.default.createElement(Icon, null, icon.component) : _react.default.createElement(icon.component, null));
};

exports.MarkButton = MarkButton;

var ToolbarButton = function ToolbarButton(_ref2) {
  var editor = _ref2.editor,
      type = _ref2.type,
      icon = _ref2.icon;
  var value = editor.value;
  var isActive = value.activeMarks.some(function (mark) {
    return mark.type === type;
  });
  return _react.default.createElement("div", {
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      editor.toggleMark(type);
    },
    style: {
      padding: '0 10px',
      cursor: 'pointer',
      backgroundColor: "".concat(isActive ? '#e4e4e4' : '#fdfaf5')
    }
  }, typeof icon.component === "string" ? _react.default.createElement(Icon, null, icon.component) : _react.default.createElement(icon.component, null));
};

exports.ToolbarButton = ToolbarButton;

var ToolbarButtonDump = function ToolbarButtonDump(_ref3) {
  var icon = _ref3.icon,
      handler = _ref3.handler;
  return _react.default.createElement("div", {
    onMouseDown: handler,
    style: {
      padding: '0 10px',
      cursor: 'pointer',
      backgroundColor: 'white'
    }
  }, typeof icon.component === "string" ? _react.default.createElement(Icon, null, icon.component) : _react.default.createElement(icon.component, null));
};

exports.ToolbarButtonDump = ToolbarButtonDump;

var MarkButtonLink = function MarkButtonLink(_ref4) {
  var editor = _ref4.editor,
      icon = _ref4.icon,
      handler = _ref4.handler;
  var value = editor.value;
  var isActive = value.inlines.some(function (inline) {
    return inline.type === 'link';
  });
  return _react.default.createElement("div", {
    onMouseDown: handler,
    style: {
      float: 'left',
      cursor: 'pointer',
      color: 'black',
      backgroundColor: "".concat(isActive ? '#e4e4e4' : 'rgb(121, 210, 206)'),
      padding: '0 5px'
    }
  }, typeof icon.component === "string" ? _react.default.createElement(Icon, null, icon.component) : _react.default.createElement(icon.component, null));
};

exports.MarkButtonLink = MarkButtonLink;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormatToolbarStyle, "FormatToolbarStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/FormatToolbar.js");
  reactHotLoader.register(DropDownStyle, "DropDownStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/FormatToolbar.js");
  reactHotLoader.register(FormatToolbar, "FormatToolbar", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/FormatToolbar.js");
  reactHotLoader.register(HeaderDropDown, "HeaderDropDown", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/FormatToolbar.js");
  reactHotLoader.register(MarkButton, "MarkButton", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/FormatToolbar.js");
  reactHotLoader.register(ToolbarButton, "ToolbarButton", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/FormatToolbar.js");
  reactHotLoader.register(ToolbarButtonDump, "ToolbarButtonDump", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/FormatToolbar.js");
  reactHotLoader.register(MarkButtonLink, "MarkButtonLink", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/FormatToolbar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();