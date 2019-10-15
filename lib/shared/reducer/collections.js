"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collections = void 0;

var _types = require("../types");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var INITIAL_STATE = {
  userblogs: [{
    _id: "",
    title: "",
    thumbnail_url: "",
    description: "",
    votes: 0,
    category: "",
    username: ""
  }],
  related: [{
    title: "",
    username: "",
    description: "",
    thumbnail_url: "",
    votes: 0,
    category: "",
    _id: ""
  }],
  categorycollection: [{
    _id: "",
    title: "",
    thumbnail_url: "",
    description: "",
    votes: 0,
    category: "",
    username: ""
  }]
};

var collections = function collections() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _types.USER_COLLECTIONS_FETCHED:
      return _objectSpread({}, state, {
        userblogs: _toConsumableArray(action.blogcollections)
      });

    case _types.RELATED_FETCHED:
      return _objectSpread({}, state, {
        related: _toConsumableArray(action.blogcollections)
      });

    case _types.CATEGORY_COLLECTION_FETCHED:
      return _objectSpread({}, state, {
        categorycollection: _toConsumableArray(action.blogcollections)
      });

    default:
      return state;
  }
};

exports.collections = collections;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INITIAL_STATE, "INITIAL_STATE", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/reducer/collections.js");
  reactHotLoader.register(collections, "collections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/reducer/collections.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();