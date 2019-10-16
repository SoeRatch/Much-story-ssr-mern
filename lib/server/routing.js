"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _controller = require("./controller");

var _routes = require("../shared/routes");

var _renderApp = _interopRequireDefault(require("./render-app"));

var _BlogContent = _interopRequireDefault(require("./models/BlogContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _default = function _default(app) {
  app.get(_routes.HOME_PAGE_ROUTE, function (req, res) {
    res.send((0, _renderApp.default)(req.url, (0, _controller.homePage)()));
  });
  app.get(_routes.DASHBOARD_PAGE_ROUTE, function (req, res) {
    res.send((0, _renderApp.default)(req.url, (0, _controller.dashboardPage)()));
  }); //since /confirmation/:token was not handled from server side , /:username/:blogparam was handled instead which was giving here , hence handle this route 

  app.get("/confirmation/:token", function (req, res) {
    res.send((0, _renderApp.default)(req.url, (0, _controller.homePage)()));
  });
  app.get("/category/:categoryname", function (req, res) {
    res.send((0, _renderApp.default)(req.url, (0, _controller.homePage)()));
  });
  app.get("/:username/:blogparam", function (req, res) {
    var splittedparam = req.params.blogparam.split('-');
    var id = splittedparam[splittedparam.length - 1];

    _BlogContent.default.findOne({
      _id: id
    }).then(function (blog) {
      if (blog == null) res.status(404).send((0, _renderApp.default)('/not-found'));else res.send((0, _renderApp.default)(req.url, (0, _controller.blogPage)(blog)));
    }).catch(function (err) {
      res.status(404).send('Oops something went wrong.');
    });
  });
  app.get("/blog/:blogid/comments/show", function (req, res) {
    res.send((0, _renderApp.default)(req.url, (0, _controller.commentPage)()));
  });
  app.get('/500', function () {
    throw Error('Fake Internal Server Error');
  });
  app.get('*', function (req, res) {
    res.status(404).send((0, _renderApp.default)(req.url));
  }); // eslint-disable-next-line no-unused-vars

  app.use(function (err, req, res, next) {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/routing.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();