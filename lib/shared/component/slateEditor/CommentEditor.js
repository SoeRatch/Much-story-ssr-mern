"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slateReact = require("slate-react");

var _slate = require("slate");

var _react = _interopRequireDefault(require("react"));

var _isHotkey = require("is-hotkey");

var _FormatBold = _interopRequireDefault(require("@material-ui/icons/FormatBold"));

var _FormatItalic = _interopRequireDefault(require("@material-ui/icons/FormatItalic"));

var _FormatUnderlined = _interopRequireDefault(require("@material-ui/icons/FormatUnderlined"));

var _Code = _interopRequireDefault(require("@material-ui/icons/Code"));

var _FormatQuote = _interopRequireDefault(require("@material-ui/icons/FormatQuote"));

var _FormatListBulleted = _interopRequireDefault(require("@material-ui/icons/FormatListBulleted"));

var _FormatListNumbered = _interopRequireDefault(require("@material-ui/icons/FormatListNumbered"));

var _FormatToolbar = require("./FormatToolbar");

var _slateHtmlSerializer = _interopRequireDefault(require("slate-html-serializer"));

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

var initialValue = {
  "object": "value",
  "document": {
    "object": "document",
    "nodes": [{
      "object": "block",
      "type": "paragraph",
      "nodes": [{
        "object": "text",
        "text": ""
      }]
    }]
  }
};
var DEFAULT_NODE = 'paragraph';
var isBoldHotkey = (0, _isHotkey.isKeyHotkey)('mod+b');
var isItalicHotkey = (0, _isHotkey.isKeyHotkey)('mod+i');
var isUnderlinedHotkey = (0, _isHotkey.isKeyHotkey)('mod+u');
var isCodeHotkey = (0, _isHotkey.isKeyHotkey)('mod+`');
var BLOCK_TAGS = {
  p: 'paragraph',
  list: 'list-item',
  ul: 'bulleted-list',
  ol: 'numbered-list',
  h1: 'heading-one',
  h2: 'heading-two',
  h3: 'h3',
  h4: 'h4',
  img: 'image',
  blockquote: 'block-quote'
};
var MARK_TAGS = {
  strong: 'bold',
  em: 'italic',
  u: 'underlined',
  del: 'strikethrough',
  code: 'code'
};
var INLINE_TAGS = {
  a: 'link'
};
var rules = [// Add our first rule with a deserializing function.
{
  deserialize: function deserialize(el, next) {
    var type = BLOCK_TAGS[el.tagName.toLowerCase()];

    if (type) {
      return {
        object: 'block',
        type: type,
        data: {
          className: el.getAttribute('class'),
          src: el.getAttribute('src')
        },
        nodes: next(el.childNodes)
      };
    }
  },
  serialize: function serialize(obj, children) {
    if (obj.object == 'block') {
      switch (obj.type) {
        case 'paragraph':
          return _react.default.createElement("p", {
            className: obj.data.get('className')
          }, children);

        case 'list-item':
          return _react.default.createElement("li", null, children);

        case 'bulleted-list':
          return _react.default.createElement("ul", null, children);

        case 'numbered-list':
          return _react.default.createElement("ol", null, children);

        case 'heading-one':
          return _react.default.createElement("h1", null, children);

        case 'heading-two':
          return _react.default.createElement("h2", null, children);

        case 'h3':
          return _react.default.createElement("h3", null, children);

        case 'h4':
          return _react.default.createElement("h4", null, children);

        case 'image':
          return _react.default.createElement("figure", null, _react.default.createElement("img", {
            style: {
              display: 'block',
              maxWidth: '100%',
              maxHeight: '20em',
              boxShadow: '0 0 0 2px blue'
            },
            src: obj.data.get('src')
          }));

        case 'block-quote':
          return _react.default.createElement("blockquote", null, children);
      }
    }
  }
}, {
  deserialize: function deserialize(el, next) {
    var type = MARK_TAGS[el.tagName.toLowerCase()];

    if (type) {
      return {
        object: 'mark',
        type: type,
        nodes: next(el.childNodes)
      };
    }
  },
  serialize: function serialize(obj, children) {
    if (obj.object == 'mark') {
      switch (obj.type) {
        case 'bold':
          return _react.default.createElement("strong", null, children);

        case 'italic':
          return _react.default.createElement("em", null, children);

        case 'underlined':
          return _react.default.createElement("u", null, children);

        case 'strikethrough':
          return _react.default.createElement("del", null, children);

        case 'code':
          return _react.default.createElement("code", null, children);
      }
    }
  }
}, {
  deserialize: function deserialize(el, next) {
    var type = INLINE_TAGS[el.tagName.toLowerCase()];

    if (type) {
      return {
        object: 'inline',
        type: type,
        data: {
          className: el.getAttribute('class'),
          href: el.getAttribute('href')
        },
        nodes: next(el.childNodes)
      };
    }
  },
  serialize: function serialize(obj, children) {
    if (obj.object == 'inline') {
      switch (obj.type) {
        case 'link':
          return _react.default.createElement("a", {
            href: obj.data.get('href')
          }, children);
      }
    }
  }
}];
var html = new _slateHtmlSerializer.default({
  rules: rules
});

var CommentEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommentEditor, _React$Component);

  function CommentEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommentEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommentEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _slate.Value.fromJSON(initialValue)
    });

    _defineProperty(_assertThisInitialized(_this), "hasMark", function (type) {
      var value = _this.state.value;
      return value.activeMarks.some(function (mark) {
        return mark.type === type;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hasBlock", function (type) {
      var value = _this.state.value;
      return value.blocks.some(function (node) {
        return node.type === type;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (editor) {
      _this.editor = editor;
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (e) {
      e.preventDefault();
      var html_string = html.serialize(_this.state.value);

      _this.props.submit(html_string);
    });

    _defineProperty(_assertThisInitialized(_this), "renderMarkButton", function (type, icon) {
      var isActive = _this.hasMark(type);

      return _react.default.createElement("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.onClickMark(event, type);
        },
        style: {
          padding: '0 10px',
          cursor: 'pointer',
          backgroundColor: "".concat(isActive ? '#e4e4e4' : '#fdfaf5')
        }
      }, typeof icon.component === "string" ? _react.default.createElement("span", null, icon.component) : _react.default.createElement(icon.component, null));
    });

    _defineProperty(_assertThisInitialized(_this), "renderBlockButton", function (type, icon) {
      var isActive = _this.hasBlock(type);

      if (['numbered-list', 'bulleted-list'].includes(type)) {
        var _this$state$value = _this.state.value,
            document = _this$state$value.document,
            blocks = _this$state$value.blocks;

        if (blocks.size > 0) {
          var parent = document.getParent(blocks.first().key);
          isActive = _this.hasBlock('list-item') && parent && parent.type === type;
        }
      }

      return _react.default.createElement("div", {
        onMouseDown: function onMouseDown(event) {
          return _this.onClickBlock(event, type);
        },
        style: {
          padding: '0 10px',
          cursor: 'pointer',
          backgroundColor: "".concat(isActive ? '#e4e4e4' : '#fdfaf5')
        }
      }, typeof icon.component === "string" ? _react.default.createElement("span", null, icon.component) : _react.default.createElement(icon.component, null));
    });

    _defineProperty(_assertThisInitialized(_this), "renderBlock", function (props, editor, next) {
      var attributes = props.attributes,
          children = props.children,
          node = props.node;

      switch (node.type) {
        case 'block-quote':
          return _react.default.createElement("blockquote", attributes, children);

        case 'bulleted-list':
          return _react.default.createElement("ul", attributes, children);

        case 'heading-one':
          return _react.default.createElement("h1", attributes, children);

        case 'heading-two':
          return _react.default.createElement("h2", attributes, children);

        case 'list-item':
          return _react.default.createElement("li", attributes, children);

        case 'numbered-list':
          return _react.default.createElement("ol", attributes, children);

        default:
          return next();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMark", function (props, editor, next) {
      var children = props.children,
          mark = props.mark,
          attributes = props.attributes;

      switch (mark.type) {
        case 'bold':
          return _react.default.createElement("strong", attributes, children);

        case 'code':
          return _react.default.createElement("code", attributes, children);

        case 'italic':
          return _react.default.createElement("em", attributes, children);

        case 'underlined':
          return _react.default.createElement("u", attributes, children);

        default:
          return next();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var value = _ref.value;

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event, editor, next) {
      var mark;

      if (isBoldHotkey(event)) {
        mark = 'bold';
      } else if (isItalicHotkey(event)) {
        mark = 'italic';
      } else if (isUnderlinedHotkey(event)) {
        mark = 'underlined';
      } else if (isCodeHotkey(event)) {
        mark = 'code';
      } else {
        return next();
      }

      event.preventDefault();
      editor.toggleMark(mark);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickMark", function (event, type) {
      event.preventDefault();

      _this.editor.toggleMark(type);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickBlock", function (event, type) {
      event.preventDefault();

      var _assertThisInitialize = _assertThisInitialized(_this),
          editor = _assertThisInitialize.editor;

      var value = editor.value;
      var document = value.document;

      if (type !== 'bulleted-list' && type !== 'numbered-list') {
        var isActive = _this.hasBlock(type);

        var isList = _this.hasBlock('list-item');

        if (isList) {
          editor.setBlocks(isActive ? DEFAULT_NODE : type).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
        } else {
          editor.setBlocks(isActive ? DEFAULT_NODE : type);
        }
      } else {
        var _isList = _this.hasBlock('list-item');

        var isType = value.blocks.some(function (block) {
          return !!document.getClosest(block.key, function (parent) {
            return parent.type === type;
          });
        });

        if (_isList && isType) {
          editor.setBlocks(DEFAULT_NODE).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
        } else if (_isList) {
          editor.unwrapBlock(type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list').wrapBlock(type);
        } else {
          editor.setBlocks('list-item').wrapBlock(type);
        }
      }
    });

    return _this;
  }

  _createClass(CommentEditor, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_FormatToolbar.FormatToolbar, null, _react.default.createElement("div", {
        style: {
          backgroundColor: '#fdfaf5',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }
      }, this.renderMarkButton('bold', {
        component: _FormatBold.default
      }), this.renderMarkButton('italic', {
        component: _FormatItalic.default
      }), this.renderMarkButton('underlined', {
        component: _FormatUnderlined.default
      }), this.renderMarkButton('code', {
        component: _Code.default
      }), this.renderBlockButton('heading-one', {
        component: "h1"
      }), this.renderBlockButton('heading-two', {
        component: "h2"
      }), this.renderBlockButton('block-quote', {
        component: _FormatQuote.default
      }), this.renderBlockButton('numbered-list', {
        component: _FormatListNumbered.default
      }), this.renderBlockButton('bulleted-list', {
        component: _FormatListBulleted.default
      }))), _react.default.createElement(_slateReact.Editor, {
        spellCheck: true,
        autoFocus: true,
        placeholder: "Write your comment ... ",
        ref: this.ref,
        value: this.state.value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        renderBlock: this.renderBlock,
        renderMark: this.renderMark
      }), _react.default.createElement("button", {
        onClick: this.submit
      }, "submit"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return CommentEditor;
}(_react.default.Component);

var _default = CommentEditor;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialValue, "initialValue", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(DEFAULT_NODE, "DEFAULT_NODE", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(isBoldHotkey, "isBoldHotkey", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(isItalicHotkey, "isItalicHotkey", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(isUnderlinedHotkey, "isUnderlinedHotkey", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(isCodeHotkey, "isCodeHotkey", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(BLOCK_TAGS, "BLOCK_TAGS", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(MARK_TAGS, "MARK_TAGS", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(INLINE_TAGS, "INLINE_TAGS", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(rules, "rules", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(html, "html", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(CommentEditor, "CommentEditor", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/slateEditor/CommentEditor.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();