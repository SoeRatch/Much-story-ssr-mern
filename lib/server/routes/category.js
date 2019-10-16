"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Category = _interopRequireDefault(require("../models/Category"));

var _parseErrors = _interopRequireDefault(require("../utils/parseErrors"));

var _authenticate = _interopRequireDefault(require("../middlewares/authenticate"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var router = _express.default.Router();

router.get('/allcategorynames', function (req, res) {
  _Category.default.find({}, {
    name: true,
    type: true,
    _id: false
  }).then(function (categories) {
    var primarycategories = categories.filter(function (cat) {
      return cat.type == 'primary';
    }).map(function (cate) {
      return cate.name;
    });
    var othercategories = categories.filter(function (cat) {
      return cat.type != 'primary';
    }).map(function (cate) {
      return cate.name;
    });
    var allcategories = {
      "primary": primarycategories,
      "other": othercategories
    };
    res.json({
      allcategories: allcategories
    });
  });
});
router.use(_authenticate.default);
router.post('/', function (req, res) {
  _Category.default.create(_objectSpread({}, req.body.category)).then(function (category) {
    return res.json({
      category: category
    });
  }).catch(function (err) {
    return res.status(400).json({
      errors: (0, _parseErrors.default)(err.errors)
    });
  });
});
var _default = router;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, "router", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/routes/category.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/routes/category.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();