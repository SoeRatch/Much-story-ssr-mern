"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _config = require("../../config");

var _carousel = _interopRequireDefault(require("./components/carousel"));

var _reactLazyload = _interopRequireDefault(require("react-lazyload"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position:fixed;\n    width:100%;\n    height:100%;\n    top:0;\n    left:0;\n    z-index:-99;\n"]);

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

var SlidingTypeContainer = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./containers/slidingTypeContainer'));
    });
  },
  modules: ['./containers/slidingTypeContainer'],
  webpack: function webpack() {
    return [require.resolveWeak('./containers/slidingTypeContainer')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var SlidingCategoryContainer = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./containers/slidingCategoryContainer'));
    });
  },
  modules: ['./containers/slidingCategoryContainer'],
  webpack: function webpack() {
    return [require.resolveWeak('./containers/slidingCategoryContainer')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var AllCategoryContainer = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./containers/allCategoryContainer'));
    });
  },
  modules: ['./containers/allCategoryContainer'],
  webpack: function webpack() {
    return [require.resolveWeak('./containers/allCategoryContainer')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var LeadGeneration = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./components/leadGeneration'));
    });
  },
  modules: ['./components/leadGeneration'],
  webpack: function webpack() {
    return [require.resolveWeak('./components/leadGeneration')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});

var ImgWrapper = _styledComponents.default.div(_templateObject());

var carousel = [{
  style: "carousel_type1",
  bg_image: "https://res.cloudinary.com/surajsharma/image/upload/v1565173308/muchstoryimages/landscape-101.jpg",
  text: ["Ever wondered what attracts your reader ?"]
}, {
  style: "carousel_type2",
  bg_image: "https://res.cloudinary.com/surajsharma/image/upload/v1571055642/muchstoryimages/foggybuildings.jpg",
  text: ["Presenting story has never been so simple"]
}, {
  style: "carousel_type3",
  bg_image: "https://res.cloudinary.com/surajsharma/image/upload/v1571063147/muchstoryimages/pillowLaptop.jpg",
  text: ["Make today Amazing", "Write your thoughts || Educate others"]
}];

var HomePage = function HomePage(_ref) {
  var allcategories = _ref.allcategories;

  var _useState = (0, _react.useState)(allcategories.primary),
      _useState2 = _slicedToArray(_useState, 2),
      primary = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      activateCategory = _useState4[0],
      setActivation = _useState4[1];

  var topRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    setValue(allcategories.primary);
    setActivation(true);
    topRef.current.scrollTo(0, 0);
  }, [allcategories]);
  return _react.default.createElement("div", {
    ref: topRef,
    style: {
      margin: '0',
      padding: '0',
      width: '100vw',
      overflow: 'hidden'
    }
  }, _react.default.createElement(_reactHelmet.default, {
    meta: [{
      name: 'description',
      content: "".concat(_config.APP_NAME, " is the next generation writing platform for a story teller to tell their unique stories.")
    }, {
      property: 'og:title',
      content: _config.APP_NAME
    }]
  }), _react.default.createElement(_carousel.default, {
    carousel: carousel
  }), _react.default.createElement(_reactLazyload.default, {
    height: 200,
    offset: 100
  }, _react.default.createElement(SlidingTypeContainer, {
    title: "LATEST ARTICLES",
    type: "latest"
  })), _react.default.createElement(_reactLazyload.default, {
    height: 200,
    offset: 100
  }, _react.default.createElement(SlidingCategoryContainer, {
    title: primary[0] || "",
    category: primary[0],
    category_type: "categoryA"
  })), _react.default.createElement(LeadGeneration, {
    title: "Loved this PRODUCT ? Get in touch"
  }), _react.default.createElement(_reactLazyload.default, {
    height: 200,
    offset: 100
  }, _react.default.createElement(SlidingCategoryContainer, {
    title: primary[1] || "",
    category: primary[1],
    category_type: "categoryB"
  })), _react.default.createElement("div", {
    style: {
      height: '100px',
      width: '100%',
      clear: 'both'
    }
  }), _react.default.createElement(_reactLazyload.default, {
    height: 200,
    offset: 100
  }, _react.default.createElement(AllCategoryContainer, {
    title: "All Articles"
  })), _react.default.createElement(ImgWrapper, {
    style: {
      backgroundImage: "url(https://res.cloudinary.com/surajsharma/image/upload/v1571063482/muchstoryimages/adventure-black-and-white.jpg)"
    }
  }));
};

__signature__(HomePage, "useState{[primary,setValue](allcategories.primary)}\nuseState{[activateCategory,setActivation](false)}\nuseRef{topRef}\nuseEffect{}");

HomePage.propTypes = {
  allcategories: _propTypes.default.shape({
    primary: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
    other: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    allcategories: state.theme && state.theme.allcategories
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(HomePage);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SlidingTypeContainer, "SlidingTypeContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
  reactHotLoader.register(SlidingCategoryContainer, "SlidingCategoryContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
  reactHotLoader.register(AllCategoryContainer, "AllCategoryContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
  reactHotLoader.register(LeadGeneration, "LeadGeneration", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
  reactHotLoader.register(ImgWrapper, "ImgWrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
  reactHotLoader.register(carousel, "carousel", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
  reactHotLoader.register(HomePage, "HomePage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/container/homePage/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();