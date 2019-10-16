"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FormatItalic = _interopRequireDefault(require("@material-ui/icons/FormatItalic"));

var _FormatBold = _interopRequireDefault(require("@material-ui/icons/FormatBold"));

var _FormatUnderlined = _interopRequireDefault(require("@material-ui/icons/FormatUnderlined"));

var _FormatStrikethrough = _interopRequireDefault(require("@material-ui/icons/FormatStrikethrough"));

var _FormatQuote = _interopRequireDefault(require("@material-ui/icons/FormatQuote"));

var _Link = _interopRequireDefault(require("@material-ui/icons/Link"));

var _FormatListBulleted = _interopRequireDefault(require("@material-ui/icons/FormatListBulleted"));

var _FormatListNumbered = _interopRequireDefault(require("@material-ui/icons/FormatListNumbered"));

var _Code = _interopRequireDefault(require("@material-ui/icons/Code"));

var _Image = _interopRequireDefault(require("@material-ui/icons/Image"));

var _Undo = _interopRequireDefault(require("@material-ui/icons/Undo"));

var _Redo = _interopRequireDefault(require("@material-ui/icons/Redo"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _slateReact = require("slate-react");

var _slate = require("slate");

var _slatePlainSerializer = _interopRequireDefault(require("slate-plain-serializer"));

var _slateHtmlSerializer = _interopRequireDefault(require("slate-html-serializer"));

var _imageExtensions = _interopRequireDefault(require("image-extensions"));

var _isUrl = _interopRequireDefault(require("is-url"));

var _isHotkey = require("is-hotkey");

var _FormatToolbar = require("./FormatToolbar");

var _EditingButtons = require("./EditingButtons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        padding: 8px 7px;\n        position: absolute;\n        z-index: 1;\n        top: -10000px;\n        left: -10000px;\n        margin-top: -6px;\n        opacity: 0;\n        background-color:rgb(121, 210, 206);\n        border-radius: 4px;\n        transition: opacity 0.75s;\n        color:white;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border:0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var existingValue = typeof window !== 'undefined' && window.localStorage.getItem('content');
var initialValue = existingValue || '<p></p>';
var isBoldHotkey = (0, _isHotkey.isKeyHotkey)('mod+b');
var isItalicHotkey = (0, _isHotkey.isKeyHotkey)('mod+i');
var isUnderlinedHotkey = (0, _isHotkey.isKeyHotkey)('mod+u');
var isCodeHotkey = (0, _isHotkey.isKeyHotkey)('mod+`');

var ToolTipIconButton = _styledComponents.default.button(_templateObject());

var HoverMenuStyle = _styledComponents.default.div(_templateObject2());

function wrapLink(editor, href) {
  editor.wrapInline({
    type: 'link',
    data: {
      href: href
    }
  });
  editor.moveToEnd();
}

function unwrapLink(editor) {
  editor.unwrapInline('link');
}

function isImage(url) {
  return _imageExtensions.default.includes(getExtension(url));
}

function getExtension(url) {
  return new URL(url).pathname.split('.').pop();
}

function insertImage(editor, src, target) {
  if (target) {
    editor.select(target);
  }

  editor.insertBlock({
    isVoid: true,
    type: 'image',
    data: {
      src: src
    }
  }).insertBlock('paragraph');
}

var schema = {
  document: {
    last: {
      type: 'paragraph'
    },
    normalize: function normalize(editor, _ref) {
      var code = _ref.code,
          node = _ref.node,
          child = _ref.child;

      switch (code) {
        case 'last_child_type_invalid':
          {
            var paragraph = _slate.Block.create('paragraph');

            return editor.insertNodeByKey(node.key, node.nodes.size, paragraph);
          }
      }
    }
  },
  blocks: {
    image: {
      isVoid: true
    }
  }
};
var BLOCK_TAGS = {
  p: 'paragraph',
  list: 'list-item',
  ul: 'bulleted-list',
  ol: 'numbered-list',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  img: 'image',
  blockquote: 'blockquote'
};
var MARK_TAGS = {
  strong: 'bold',
  em: 'italic',
  u: 'underline',
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

        case 'h1':
          return _react.default.createElement("h1", null, children);

        case 'h2':
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

        case 'blockquote':
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

        case 'underline':
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

var SlateEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(SlateEditor, _Component);

  function SlateEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SlateEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SlateEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: html.deserialize(initialValue) //html to slate format

    });

    _defineProperty(_assertThisInitialized(_this), "menuRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "ref", function (editor) {
      _this.editor = editor;
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.updateMenu();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.updateMenu();
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref2) {
      var value = _ref2.value;

      if (value.document != _this.state.value.document) {
        var string = html.serialize(value); // slate format to html format

        localStorage.setItem('content', string);
      }

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hasLinks", function () {
      var value = _this.state.value;
      return value.inlines.some(function (inline) {
        return inline.type === 'link';
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

    _defineProperty(_assertThisInitialized(_this), "renderMark", function (props) {
      switch (props.mark.type) {
        case 'bold':
          return _react.default.createElement("strong", props.attributes, props.children);

        case 'italic':
          return _react.default.createElement("em", props.attributes, props.children);

        case 'underline':
          return _react.default.createElement("u", props.attributes, props.children);

        case 'strikethrough':
          return _react.default.createElement("del", props.attributes, props.children);

        case 'code':
          return _react.default.createElement("code", props.attributes, props.children);

        default:
          return next();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderInline", function (props) {
      switch (props.node.type) {
        case 'link':
          {
            var data = props.node.data;
            var href = data.get('href');
            return _react.default.createElement("a", _extends({}, props.attributes, {
              href: href
            }), props.children);
          }

        default:
          {
            return next();
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderBlock", function (props, editor, next) {
      switch (props.node.type) {
        case 'image':
          {
            var src = props.node.data.get('src');
            return _react.default.createElement("figure", props.attributes, _react.default.createElement("img", {
              src: src,
              style: {
                display: 'block',
                maxWidth: '100%',
                maxHeight: '20em',
                boxShadow: '0 0 0 2px blue'
              }
            }));
          }

        case 'paragraph':
          return _react.default.createElement("p", _extends({}, props.attributes, {
            className: props.node.data.get('className')
          }), props.children);

        case 'list-item':
          return _react.default.createElement("li", props.attributes, props.children);

        case 'bulleted-list':
          return _react.default.createElement("ul", props.attributes, props.children);

        case 'numbered-list':
          return _react.default.createElement("ol", props.attributes, props.children);

        case 'h1':
          return _react.default.createElement("h1", props.attributes, props.children);

        case 'h2':
          return _react.default.createElement("h2", props.attributes, props.children);

        case 'h3':
          return _react.default.createElement("h3", props.attributes, props.children);

        case 'h4':
          return _react.default.createElement("h4", props.attributes, props.children);

        case 'blockquote':
          return _react.default.createElement("blockquote", props.attributes, props.children);

        default:
          {
            return next();
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPaste", function (event, editor, next) {
      if (editor.value.selection.isCollapsed) return next();
      var transfer = (0, _slateReact.getEventTransfer)(event);
      var type = transfer.type,
          text = transfer.text;
      if (type !== 'text' && type !== 'html') return next();
      if (!(0, _isUrl.default)(text)) return next();
      if (_this.hasLinks()) editor.command(unwrapLink);
      editor.command(wrapLink, text);
    });

    _defineProperty(_assertThisInitialized(_this), "onDropOrPaste", function (event, editor, next) {
      var target = editor.findEventRange(event);
      if (!target && event.type === 'drop') return next();
      var transfer = (0, _slateReact.getEventTransfer)(event);
      var type = transfer.type,
          text = transfer.text,
          files = transfer.files;

      if (type === 'files') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var file = _step.value;
            var reader = new FileReader();

            var _file$type$split = file.type.split('/'),
                _file$type$split2 = _slicedToArray(_file$type$split, 1),
                mime = _file$type$split2[0];

            if (mime !== 'image') return "continue";
            reader.addEventListener('load', function () {
              editor.command(insertImage, reader.result, target);
            });
            reader.readAsDataURL(file);
          };

          for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return;
      }

      if (type === 'text') {
        if (!(0, _isUrl.default)(text)) return next();
        if (!isImage(text)) return next();
        editor.command(insertImage, text, target);
        return;
      }

      next();
    });

    _defineProperty(_assertThisInitialized(_this), "updateMenu", function () {
      var menu = _this.menuRef.current;
      if (!menu) return;
      var value = _this.state.value;
      var fragment = value.fragment,
          selection = value.selection;

      if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
        menu.removeAttribute('style');
        return;
      }

      var native = window.getSelection();
      var range = native.getRangeAt(0);
      var rect = range.getBoundingClientRect();
      menu.style.opacity = 1;
      menu.style.top = "".concat(rect.top + window.pageYOffset - menu.offsetHeight, "px");
      menu.style.left = "".concat(rect.left + window.pageXOffset - menu.offsetWidth / 2 + rect.width / 2, "px");
    });

    _defineProperty(_assertThisInitialized(_this), "onMarkClick", function (e, type) {
      e.preventDefault();
      var value = _this.state.value;

      _this.editor.toggleMark(type);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickLink", function (e) {
      e.preventDefault();
      var editor = _this.editor;
      var value = editor.value;

      var hasLinks = _this.hasLinks();

      if (hasLinks) {
        editor.command(unwrapLink);
      } else if (value.selection.isExpanded) {
        var href = window.prompt("Enter the URL of the link");
        if (href == null) return;
        editor.command(wrapLink, href);
      } else {
        var _href = window.prompt("Enter the URL of the link");

        if (_href == null) return;
        var text = window.prompt('Enter the text for the link:');

        if (text == null) {
          return;
        }

        editor.insertText(text).moveFocusBackward(text.length).command(wrapLink, _href);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickUndo", function (event) {
      event.preventDefault();

      _this.editor.undo();
    });

    _defineProperty(_assertThisInitialized(_this), "onClickRedo", function (event) {
      event.preventDefault();

      _this.editor.redo();
    });

    _defineProperty(_assertThisInitialized(_this), "onClickImage", function (event) {
      event.preventDefault();
      var src = window.prompt('Enter the URL of the image:');
      if (!src) return;

      _this.editor.command(insertImage, src);
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (e) {
      e.preventDefault();
      var blogdata_htmlstring = localStorage.getItem('content');

      var blogdata_string = _slatePlainSerializer.default.serialize(_this.state.value);

      console.log("edit page", _this.state.value);

      _this.props.submit({
        blogdata_htmlstring: blogdata_htmlstring,
        blogdata_string: blogdata_string
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderEditor", function (props, editor, next) {
      var children = next();
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_FormatToolbar.FormatToolbar, null, _react.default.createElement("div", {
        style: {
          backgroundColor: '#fdfaf5',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }
      }, _react.default.createElement(_FormatToolbar.HeaderDropDown, {
        header: "Heading"
      }, _react.default.createElement(_EditingButtons.BlockButton, {
        editor: editor,
        type: "h1",
        icon: {
          component: "Heading 1"
        },
        fontsize: "2em"
      }), _react.default.createElement(_EditingButtons.BlockButton, {
        editor: editor,
        type: "h2",
        icon: {
          component: "Heading 2"
        },
        fontsize: "1.5em"
      }), _react.default.createElement(_EditingButtons.BlockButton, {
        editor: editor,
        type: "h3",
        icon: {
          component: "Heading 3"
        },
        fontsize: "1.17em"
      }), _react.default.createElement(_EditingButtons.BlockButton, {
        editor: editor,
        type: "h4",
        icon: {
          component: "Heading 4"
        },
        fontsize: "1em"
      })), _react.default.createElement(_FormatToolbar.ToolbarButton, {
        editor: editor,
        type: "bold",
        icon: {
          component: _FormatBold.default
        }
      }), _react.default.createElement(_FormatToolbar.ToolbarButton, {
        editor: editor,
        type: "italic",
        icon: {
          component: _FormatItalic.default
        }
      }), _react.default.createElement(_FormatToolbar.ToolbarButton, {
        editor: editor,
        type: "underline",
        icon: {
          component: _FormatUnderlined.default
        }
      }), _react.default.createElement(_FormatToolbar.ToolbarButton, {
        editor: editor,
        type: "strikethrough",
        icon: {
          component: _FormatStrikethrough.default
        }
      }), _react.default.createElement("div", {
        style: {
          padding: '0 10px',
          cursor: 'pointer',
          backgroundColor: "".concat(_this.hasLinks() ? '#e4e4e4' : 'white')
        },
        onMouseDown: _this.onClickLink
      }, _react.default.createElement(_Link.default, null)), _react.default.createElement(_FormatToolbar.ToolbarButton, {
        editor: editor,
        type: "code",
        icon: {
          component: _Code.default
        }
      }), _react.default.createElement(_EditingButtons.BlockButton, {
        editor: editor,
        type: "bulleted-list",
        icon: {
          component: _FormatListBulleted.default
        }
      }), _react.default.createElement(_EditingButtons.BlockButton, {
        editor: editor,
        type: "numbered-list",
        icon: {
          component: _FormatListNumbered.default
        }
      }), _react.default.createElement(_EditingButtons.BlockButton, {
        editor: editor,
        type: "blockquote",
        icon: {
          component: _FormatQuote.default
        }
      }), _react.default.createElement(_FormatToolbar.ToolbarButtonDump, {
        handler: _this.onClickImage,
        icon: {
          component: _Image.default
        }
      }), _react.default.createElement(_FormatToolbar.ToolbarButtonDump, {
        handler: _this.onClickUndo,
        icon: {
          component: _Undo.default
        }
      }), _react.default.createElement(_FormatToolbar.ToolbarButtonDump, {
        handler: _this.onClickRedo,
        icon: {
          component: _Redo.default
        }
      }))), children, _react.default.createElement(HoverMenuStyle, {
        ref: _this.menuRef
      }, _react.default.createElement(_FormatToolbar.MarkButton, {
        editor: editor,
        type: "bold",
        icon: {
          component: _FormatBold.default
        }
      }), _react.default.createElement(_FormatToolbar.MarkButton, {
        editor: editor,
        type: "italic",
        icon: {
          component: _FormatItalic.default
        }
      }), _react.default.createElement(_FormatToolbar.MarkButton, {
        editor: editor,
        type: "underline",
        icon: {
          component: _FormatUnderlined.default
        }
      }), _react.default.createElement(_FormatToolbar.MarkButton, {
        editor: editor,
        type: "strikethrough",
        icon: {
          component: _FormatStrikethrough.default
        }
      }), _react.default.createElement(_FormatToolbar.MarkButton, {
        editor: editor,
        type: "code",
        icon: {
          component: _Code.default
        }
      }), _react.default.createElement(_FormatToolbar.MarkButtonLink, {
        editor: editor,
        handler: _this.onClickLink,
        icon: {
          component: _Link.default
        }
      })));
    });

    return _this;
  }

  _createClass(SlateEditor, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_slateReact.Editor, {
        ref: this.ref,
        value: this.state.value,
        onChange: this.onChange,
        onPaste: this.onPaste,
        onKeyDown: this.onKeyDown,
        renderMark: this.renderMark,
        renderInline: this.renderInline,
        renderBlock: this.renderBlock,
        onDrop: this.onDropOrPaste,
        renderEditor: this.renderEditor
      }), _react.default.createElement(_Button.default, {
        variant: "outlined",
        color: "primary",
        onClick: this.submit
      }, "Publish"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SlateEditor;
}(_react.Component);

var _default = SlateEditor;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(existingValue, "existingValue", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(initialValue, "initialValue", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(isBoldHotkey, "isBoldHotkey", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(isItalicHotkey, "isItalicHotkey", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(isUnderlinedHotkey, "isUnderlinedHotkey", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(isCodeHotkey, "isCodeHotkey", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(ToolTipIconButton, "ToolTipIconButton", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(HoverMenuStyle, "HoverMenuStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(wrapLink, "wrapLink", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(unwrapLink, "unwrapLink", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(isImage, "isImage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(getExtension, "getExtension", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(insertImage, "insertImage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(schema, "schema", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(BLOCK_TAGS, "BLOCK_TAGS", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(MARK_TAGS, "MARK_TAGS", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(INLINE_TAGS, "INLINE_TAGS", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(rules, "rules", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(html, "html", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(SlateEditor, "SlateEditor", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();