"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../../../actions/theme");

var _slidingComponent = _interopRequireDefault(require("../components/slidingComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SlidingCategoryContainer = function SlidingCategoryContainer(_ref) {
  var title = _ref.title,
      theme = _ref.theme,
      category_type = _ref.category_type,
      category = _ref.category,
      fetchThemeCategoryACollections = _ref.fetchThemeCategoryACollections,
      fetchThemeCategoryBCollections = _ref.fetchThemeCategoryBCollections,
      fetchThemeCategoryCCollections = _ref.fetchThemeCategoryCCollections;

  var _useState = (0, _react.useState)(category),
      _useState2 = _slicedToArray(_useState, 2),
      cat = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(title),
      _useState4 = _slicedToArray(_useState3, 2),
      tit = _useState4[0],
      setTitle = _useState4[1];

  (0, _react.useEffect)(function () {
    setValue(category);
    setTitle(category);
    if (category_type == 'categoryA' && category) fetchThemeCategoryACollections(category);
    if (category_type == 'categoryB' && category) fetchThemeCategoryBCollections(category);
    if (category_type == 'categoryC' && category) fetchThemeCategoryCCollections(category);
  }, [category]);
  return _react.default.createElement(_slidingComponent.default, {
    data: theme[category_type],
    title: tit
  });
};

__signature__(SlidingCategoryContainer, "useState{[cat,setValue](category)}\nuseState{[tit,setTitle](title)}\nuseEffect{}");

SlidingCategoryContainer.propTypes = {
  title: _propTypes.default.string.isRequired,
  category_type: _propTypes.default.string.isRequired,
  fetchThemeCategoryACollections: _propTypes.default.func.isRequired,
  fetchThemeCategoryBCollections: _propTypes.default.func.isRequired,
  fetchThemeCategoryCCollections: _propTypes.default.func.isRequired,
  theme: _propTypes.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  fetchThemeCategoryACollections: _theme.fetchThemeCategoryACollections,
  fetchThemeCategoryBCollections: _theme.fetchThemeCategoryBCollections,
  fetchThemeCategoryCCollections: _theme.fetchThemeCategoryCCollections
})(SlidingCategoryContainer);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SlidingCategoryContainer, "SlidingCategoryContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/containers/slidingCategoryContainer.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/containers/slidingCategoryContainer.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/containers/slidingCategoryContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();