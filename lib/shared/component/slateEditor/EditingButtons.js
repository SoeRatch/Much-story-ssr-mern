"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var hasBlock = function hasBlock(value, type) {
  return value.blocks.some(function (node) {
    return node.type === type;
  });
};

var onClickBlock = function onClickBlock(event, editor, type) {
  event.preventDefault();
  var value = editor.value;
  var document = value.document;
  var DEFAULT_NODE = 'paragraph';

  if (type !== 'bulleted-list' && type !== 'numbered-list') {
    var isActive = hasBlock(value, type);
    var isList = hasBlock(value, 'list-item');

    if (isList) {
      editor.setBlocks(isActive ? DEFAULT_NODE : type).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else {
      editor.setBlocks(isActive ? DEFAULT_NODE : type);
    }
  } else {
    var _isList = hasBlock(value, 'list-item');

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
};

var BlockButton = function BlockButton(_ref) {
  var editor = _ref.editor,
      type = _ref.type,
      icon = _ref.icon,
      fontsize = _ref.fontsize;
  var value = editor.value;
  var isActive = value.blocks.some(function (node) {
    return node.type === type;
  });

  if (['numbered-list', 'bulleted-list'].includes(type)) {
    var document = value.document,
        blocks = value.blocks;

    if (blocks.size > 0) {
      var parent = document.getParent(blocks.first().key);
      isActive = hasBlock(value, 'list-item') && parent && parent.type === type;
    }
  }

  return _react.default.createElement("div", {
    onMouseDown: function onMouseDown(event) {
      return onClickBlock(event, editor, type);
    },
    style: {
      padding: '0 10px',
      cursor: 'pointer',
      fontSize: "".concat(fontsize),
      backgroundColor: "".concat(isActive ? '#e4e4e4' : '#fdfaf5')
    }
  }, typeof icon.component === "string" ? _react.default.createElement("span", null, icon.component) : _react.default.createElement(icon.component, null));
};

exports.BlockButton = BlockButton;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(hasBlock, "hasBlock", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/EditingButtons.js");
  reactHotLoader.register(onClickBlock, "onClickBlock", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/EditingButtons.js");
  reactHotLoader.register(BlockButton, "BlockButton", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/component/slateEditor/EditingButtons.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();