"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var router = _express.default.Router();

router.post("/", function (req, res) {
  var credentials = req.body.credentials;

  _User.default.findOne({
    email: credentials.email
  }).then(function (user) {
    if (user && user.isValidPassword(credentials.password)) {
      res.json({
        user: user.toAuthJSON()
      });
    } else {
      res.status(400).json({
        errors: {
          global: "Invalid credentials"
        }
      });
    }
  });
});
router.post("/confirmation", function (req, res) {
  var token = req.body.token;

  _User.default.findOneAndUpdate({
    confirmationToken: token
  }, // 1st param -condition to search
  {
    confirmationToken: "",
    confirmed: true
  }, // 2nd param - updation
  {
    new: true
  } // 3rd param - option . true gives updated version of the new record inside then fn.
  ).then(function (user) {
    return (// if we do not specify option , then record would be without updation .
      user ? res.json({
        user: user.toAuthJSON()
      }) : res.status(400).json({})
    );
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

  reactHotLoader.register(router, "router", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/routes/auth.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/routes/auth.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();