"use strict";

var _compression = _interopRequireDefault(require("compression"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routing = _interopRequireDefault(require("./routing"));

var _config = require("../shared/config");

var _util = require("../shared/util");

var _renderApp = _interopRequireDefault(require("./render-app"));

var _routes = require("../shared/routes");

var _auth = _interopRequireDefault(require("./routes/auth"));

var _users = _interopRequireDefault(require("./routes/users"));

var _blogcontent = _interopRequireDefault(require("./routes/blogcontent"));

var _collections = _interopRequireDefault(require("./routes/collections"));

var _category = _interopRequireDefault(require("./routes/category"));

var _emails = _interopRequireDefault(require("./routes/emails"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

require('dotenv').config();

var app = (0, _express.default)();
app.use((0, _compression.default)()); //mongoose.connect(process.env.MONGODB_URL,{ useMongoClient: true});

_mongoose.default.connect(process.env.MONGODB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(_bodyParser.default.json());
/*mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://127.0.0.1/muchstory', { 
	useNewUrlParser: true,
	useUnifiedTopology: true
});*/

_mongoose.default.Promise = _bluebird.default;
var db = _mongoose.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(_config.STATIC_PATH, _express.default.static('dist')); // dist for generated files

app.use(_config.STATIC_PATH, _express.default.static('public')); // public for declarative ones

app.use("/api/auth", _auth.default);
app.use("/api/users", _users.default);
app.use("/api/blogcontent", _blogcontent.default);
app.use("/api/collections", _collections.default);
app.use("/api/category", _category.default);
app.use("/api/emails", _emails.default);
(0, _routing.default)(app);

_reactLoadable.default.preloadAll().then(function () {
  app.listen(_config.WEB_PORT, function () {
    // eslint-disable-next-line no-console
    console.log("Server running on port ".concat(_config.WEB_PORT, " ").concat(_util.isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal', "."));
  });
}).catch(function (err) {
  console.log(err);
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/index.js");
  reactHotLoader.register(db, "db", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();