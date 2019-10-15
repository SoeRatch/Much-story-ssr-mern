"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styledComponents = require("styled-components");

var _initStore = _interopRequireDefault(require("./init-store"));

var _app = _interopRequireDefault(require("./../shared/app"));

var _config = require("../shared/config");

var _util = require("../shared/util");

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _reactLoadableSsrAddon = require("react-loadable-ssr-addon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var manifest = require('../../dist/react-loadable-ssr-addon.json');

var renderApp = function renderApp(location, plainPartialState) {
  var routerContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var store = (0, _initStore.default)(plainPartialState);
  var sheet = new _styledComponents.ServerStyleSheet();
  var modules = new Set();

  var appHtml = _server.default.renderToString(sheet.collectStyles(_react.default.createElement(_reactLoadable.default.Capture, {
    report: function report(moduleName) {
      return modules.add(moduleName);
    }
  }, _react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_reactRouter.StaticRouter, {
    location: location,
    context: routerContext
  }, _react.default.createElement(_app.default, null))))));

  var styles = sheet.getStyleTags();

  var head = _reactHelmet.default.rewind();

  var bundles = (0, _reactLoadableSsrAddon.getBundles)(manifest, [].concat(_toConsumableArray(manifest.entrypoints), _toConsumableArray(Array.from(modules))));
  var scripts = bundles.js || [];
  return "<!doctype html>\n    <html>\n      <head>\n        ".concat(head.title, "\n        ").concat(head.meta, "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n        <link href=\"https://fonts.googleapis.com/css?family=Itim|Cambo|Gentium+Book+Basic|Bangers&display=swap|Proxima+Nova|proxima-nova|sans-serif|Poppins|Helvetica|Arial|Merriweather|Arial\" rel=\"stylesheet\">\n        ").concat(styles, "\n        <link rel=\"stylesheet\" href=\"").concat(_config.STATIC_PATH, "/css/style.css\">\n        \n       </head>\n      <body style=\"overflow-x:hidden;\">\n        <div class=\"").concat(_config.APP_CONTAINER_CLASS, "\">").concat(appHtml, "</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(JSON.stringify(store.getState()), "\n        </script>\n        ").concat(scripts.map(function (script) {
    return "<script src=\"".concat(_util.isProd ? _config.STATIC_PATH : "http://localhost:".concat(_config.WDS_PORT, "/dist"), "/").concat(script.file, "\"></script>");
  }).join('\n'), "\n      </body>\n    </html>");
};

var _default = renderApp;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderApp, "renderApp", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/render-app.jsx");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/render-app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();