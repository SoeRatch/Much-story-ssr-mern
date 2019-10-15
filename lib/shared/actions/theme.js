"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchThemeCategoryCCollections = exports.fetchThemeCategoryBCollections = exports.fetchThemeCategoryACollections = exports.fetchThemeAllCollections = exports.fetchThemeTypeCollections = exports.fetchAllCategoryNames = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var CategoryNamesFetched = function CategoryNamesFetched(allcategories) {
  return {
    type: _types.FETCH_PRIMARY_CATEGORY,
    allcategories: allcategories
  };
};

var fetchAllCategoryNames = function fetchAllCategoryNames() {
  return function (dispatch) {
    return _axios.default.get("/api/category/allcategorynames").then(function (res) {
      return res.data.allcategories;
    }).then(function (allcategories) {
      dispatch(CategoryNamesFetched(allcategories));
    });
  };
};

exports.fetchAllCategoryNames = fetchAllCategoryNames;

var themeTypeCollections = function themeTypeCollections(blogcollections) {
  return {
    type: _types.LATEST_FETCHED,
    blogcollections: blogcollections
  };
};

var themeAllCollections = function themeAllCollections(blogcollections) {
  return {
    type: _types.ALL_FETCHED,
    blogcollections: blogcollections
  };
};

var fetchThemeTypeCollections = function fetchThemeTypeCollections(type) {
  return function (dispatch) {
    return _axios.default.get("/api/collections/type", {
      params: {
        type: type,
        limit: 9,
        skip: 0
      }
    }).then(function (res) {
      return res.data.blogcollections;
    }).then(function (blogcollections) {
      dispatch(themeTypeCollections(blogcollections));
    });
  };
};

exports.fetchThemeTypeCollections = fetchThemeTypeCollections;

var fetchThemeAllCollections = function fetchThemeAllCollections(type, limit, skip) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      _axios.default.get("/api/collections/type", {
        params: {
          type: type,
          limit: limit,
          skip: skip
        }
      }).then(function (res) {
        return res.data.blogcollections;
      }).then(function (blogcollections) {
        dispatch(themeAllCollections(blogcollections));
        resolve(blogcollections);
      });
    });
  };
};

exports.fetchThemeAllCollections = fetchThemeAllCollections;

var themeCategoryACollections = function themeCategoryACollections(blogcollections) {
  return {
    type: _types.CATEGORY_HOMEPAGE_UI_A,
    blogcollections: blogcollections
  };
};

var fetchThemeCategoryACollections = function fetchThemeCategoryACollections(category) {
  return function (dispatch) {
    return _axios.default.get("/api/collections/related", {
      params: {
        category: category,
        limit: 9
      }
    }).then(function (res) {
      return res.data.blogcollections;
    }).then(function (blogcollections) {
      dispatch(themeCategoryACollections(blogcollections));
    });
  };
};

exports.fetchThemeCategoryACollections = fetchThemeCategoryACollections;

var themeCategoryBCollections = function themeCategoryBCollections(blogcollections) {
  return {
    type: _types.CATEGORY_HOMEPAGE_UI_B,
    blogcollections: blogcollections
  };
};

var fetchThemeCategoryBCollections = function fetchThemeCategoryBCollections(category) {
  return function (dispatch) {
    return _axios.default.get("/api/collections/related", {
      params: {
        category: category,
        limit: 9
      }
    }).then(function (res) {
      return res.data.blogcollections;
    }).then(function (blogcollections) {
      dispatch(themeCategoryBCollections(blogcollections));
    });
  };
};

exports.fetchThemeCategoryBCollections = fetchThemeCategoryBCollections;

var themeCategoryCCollections = function themeCategoryCCollections(blogcollections) {
  return {
    type: _types.CATEGORY_HOMEPAGE_UI_C,
    blogcollections: blogcollections
  };
};

var fetchThemeCategoryCCollections = function fetchThemeCategoryCCollections(category) {
  return function (dispatch) {
    return _axios.default.get("/api/collections/related", {
      params: {
        category: category,
        limit: 9
      }
    }).then(function (res) {
      return res.data.blogcollections;
    }).then(function (blogcollections) {
      dispatch(themeCategoryCCollections(blogcollections));
    });
  };
};

exports.fetchThemeCategoryCCollections = fetchThemeCategoryCCollections;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CategoryNamesFetched, "CategoryNamesFetched", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(fetchAllCategoryNames, "fetchAllCategoryNames", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(themeTypeCollections, "themeTypeCollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(themeAllCollections, "themeAllCollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(fetchThemeTypeCollections, "fetchThemeTypeCollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(fetchThemeAllCollections, "fetchThemeAllCollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(themeCategoryACollections, "themeCategoryACollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(fetchThemeCategoryACollections, "fetchThemeCategoryACollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(themeCategoryBCollections, "themeCategoryBCollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(fetchThemeCategoryBCollections, "fetchThemeCategoryBCollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(themeCategoryCCollections, "themeCategoryCCollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
  reactHotLoader.register(fetchThemeCategoryCCollections, "fetchThemeCategoryCCollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/actions/theme.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();