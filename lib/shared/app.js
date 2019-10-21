"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _config = require("./config");

var _UserRouteHOC = _interopRequireDefault(require("./component/hocRoutes/UserRouteHOC"));

var _AdminRouteHOC = _interopRequireDefault(require("./component/hocRoutes/AdminRouteHOC"));

var _routes = require("./routes");

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin:0;\n  padding:0;\n  overflow:hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var AppContainer = _styledComponents.default.div(_templateObject());

var Nav = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./component/nav'));
    });
  },
  modules: ['./component/nav'],
  webpack: function webpack() {
    return [require.resolveWeak('./component/nav')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var HomePage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./container/homePage'));
    });
  },
  modules: ['./container/homePage'],
  webpack: function webpack() {
    return [require.resolveWeak('./container/homePage')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var DashboardPage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./component/pages/DashboardPage'));
    });
  },
  modules: ['./component/pages/DashboardPage'],
  webpack: function webpack() {
    return [require.resolveWeak('./component/pages/DashboardPage')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var CreateStory = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./container/createStory'));
    });
  },
  modules: ['./container/createStory'],
  webpack: function webpack() {
    return [require.resolveWeak('./container/createStory')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var Register = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./component/pages/Register'));
    });
  },
  modules: ['./component/pages/Register'],
  webpack: function webpack() {
    return [require.resolveWeak('./component/pages/Register')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var ConfirmationPage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./component/pages/ConfirmationPage'));
    });
  },
  modules: ['./component/pages/ConfirmationPage'],
  webpack: function webpack() {
    return [require.resolveWeak('./component/pages/ConfirmationPage')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var CategoryPage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./container/categoryPage'));
    });
  },
  modules: ['./container/categoryPage'],
  webpack: function webpack() {
    return [require.resolveWeak('./container/categoryPage')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var BlogPage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./container/blogPage'));
    });
  },
  modules: ['./container/blogPage'],
  webpack: function webpack() {
    return [require.resolveWeak('./container/blogPage')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var CommentPage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./container/commentPage'));
    });
  },
  modules: ['./container/commentPage'],
  webpack: function webpack() {
    return [require.resolveWeak('./container/commentPage')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var AdminPage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./component/pages/AdminPage'));
    });
  },
  modules: ['./component/pages/AdminPage'],
  webpack: function webpack() {
    return [require.resolveWeak('./component/pages/AdminPage')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});
var NotFoundPage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./component/page/not-found'));
    });
  },
  modules: ['./component/page/not-found'],
  webpack: function webpack() {
    return [require.resolveWeak('./component/page/not-found')];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading...");
  }
});

var App = function App() {
  return _react.default.createElement(AppContainer, null, _react.default.createElement(_reactHelmet.default, {
    titleTemplate: "%s | ".concat(_config.APP_NAME),
    defaultTitle: _config.APP_NAME
  }), _react.default.createElement(Nav, null), _react.default.createElement(_reactRouter.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: _routes.HOME_PAGE_ROUTE,
    render: function render() {
      return _react.default.createElement(HomePage, null);
    }
  }), _react.default.createElement(_UserRouteHOC.default, {
    exact: true,
    path: _routes.DASHBOARD_PAGE_ROUTE,
    component: DashboardPage
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: _routes.CREATE_STORY_ROUTE,
    component: CreateStory
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/register",
    component: Register
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/confirmation/:token",
    component: ConfirmationPage
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/category/:categoryname",
    render: function render() {
      return _react.default.createElement(CategoryPage, null);
    }
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/:username/:blogparam",
    render: function render() {
      return _react.default.createElement(BlogPage, null);
    }
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/blog/:blogid/comments/show",
    render: function render() {
      return _react.default.createElement(CommentPage, null);
    }
  }), _react.default.createElement(_AdminRouteHOC.default, {
    exact: true,
    path: _routes.ADMIN_PAGE_ROUTE,
    component: AdminPage
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: NotFoundPage
  })));
};

var _default = App;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppContainer, "AppContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(Nav, "Nav", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(HomePage, "HomePage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(DashboardPage, "DashboardPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(CreateStory, "CreateStory", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(Register, "Register", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(ConfirmationPage, "ConfirmationPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(CategoryPage, "CategoryPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(BlogPage, "BlogPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(CommentPage, "CommentPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(AdminPage, "AdminPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(NotFoundPage, "NotFoundPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(App, "App", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();