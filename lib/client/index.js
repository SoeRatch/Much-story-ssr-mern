"use strict";

require("babel-polyfill");

var _immutable = _interopRequireDefault(require("immutable"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactHotLoader = require("react-hot-loader");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reactRouterDom = require("react-router-dom");

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _app = _interopRequireDefault(require("../shared/app"));

var _config = require("../shared/config");

var _util = require("../shared/util");

var _user2 = require("../shared/reducer/user");

var _blogs = require("../shared/reducer/blogs");

var _collections = require("../shared/reducer/collections");

var _themes = require("../shared/reducer/themes");

var _auth = require("../shared/actions/auth");

var _setAuthorizationHeader = _interopRequireDefault(require("../shared/utils/setAuthorizationHeader"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var composeEnhancers = (_util.isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || _redux.compose;
var preloadedState = window.__PRELOADED_STATE__;
var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  user: _user2.user,
  blog: _blogs.blog,
  theme: _themes.theme,
  collections: _collections.collections,
  comments: _blogs.comments
}), {
  blog: _immutable.default.fromJS(preloadedState.blog)
}, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk.default)));

if (localStorage.muchStoryJWT) {
  var payload = (0, _jwtDecode.default)(localStorage.muchStoryJWT);
  var _user = {
    token: localStorage.muchStoryJWT,
    email: payload.email,
    username: payload.username,
    confirmed: payload.confirmed
  };
  (0, _setAuthorizationHeader.default)(localStorage.muchStoryJWT);
  store.dispatch((0, _auth.userLoggedIn)(_user));
}

var rootEl = document.querySelector(_config.APP_CONTAINER_SELECTOR);

var wrapApp = function wrapApp(AppComponent, reduxStore) {
  return _react.default.createElement(_reactRedux.Provider, {
    store: reduxStore
  }, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_reactHotLoader.AppContainer, null, _react.default.createElement(AppComponent, null))));
};

_reactLoadable.default.preloadReady().then(function () {
  _reactDom.default.render(wrapApp(_app.default, store), rootEl);
});

if (module.hot) {
  module.hot.accept('../shared/app', function () {
    var NextApp = require('../shared/app').default;

    _reactDom.default.render(wrapApp(NextApp, store), rootEl);
  });
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(composeEnhancers, "composeEnhancers", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/client/index.jsx");
  reactHotLoader.register(preloadedState, "preloadedState", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/client/index.jsx");
  reactHotLoader.register(store, "store", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/client/index.jsx");
  reactHotLoader.register(rootEl, "rootEl", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/client/index.jsx");
  reactHotLoader.register(wrapApp, "wrapApp", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/client/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();