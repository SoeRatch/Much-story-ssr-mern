"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _BlogContent = _interopRequireDefault(require("../models/BlogContent"));

var _Comment = _interopRequireDefault(require("../models/Comment"));

var _parseErrors = _interopRequireDefault(require("../utils/parseErrors"));

var _readEstimate = _interopRequireDefault(require("../utils/readEstimate"));

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

var castUserId = function castUserId(userId) {
  return _mongoose.default.Types.ObjectId(userId);
};

router.get('/', function (req, res) {
  var splittedparam = req.query.parameter.split('-');
  var id_string = splittedparam[splittedparam.length - 1];
  var blogid = castUserId(id_string);

  _BlogContent.default.aggregate([{
    $match: {
      _id: blogid
    }
  }, {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "resulting"
    }
  }, {
    $unwind: {
      path: "$resulting"
    }
  }, {
    $project: {
      _id: 1,
      title: 1,
      username: "$resulting.username",
      blogdata_htmlstring: 1,
      description: 1,
      thumbnail_url: 1,
      votes: 1,
      userId: 1,
      category: 1,
      humanized_duration: 1,
      createdAt: 1
    }
  }]).exec(function (err, results) {
    res.json({
      blog: results[0]
    });
  });
  /*BlogContent.findOne({_id:id_string})
  .then(blog=>res.json({blog}));*/

});
router.get('/comments', function (req, res) {
  var id_string = req.query.blogid;
  var blogid = castUserId(id_string);

  _Comment.default.find({
    blogId: blogid
  }).then(function (comments) {
    res.json({
      comments: comments
    });
  });
});
router.use(_authenticate.default);
router.post('/', function (req, res) {
  var blogdata_htmlstring = req.body.blog.blogdata_htmlstring;

  var _readTime = (0, _readEstimate.default)(blogdata_htmlstring),
      humanizedDuration = _readTime.humanizedDuration;

  _BlogContent.default.create(_objectSpread({}, req.body.blog, {
    humanized_duration: humanizedDuration,
    userId: req.currentUser._id
  })).then(function (blog) {
    return res.json({
      blog: blog
    });
  }).catch(function (err) {
    return res.status(400).json({
      errors: (0, _parseErrors.default)(err.errors)
    });
  });
});
router.post('/comments', function (req, res) {
  var comment = req.body.data.comment;
  var blog_id = req.body.data.blogid;

  _Comment.default.create({
    comment_string: comment,
    userId: req.currentUser._id,
    blogId: blog_id,
    username: req.currentUser.username
  }).then(function (comment) {
    _BlogContent.default.findOne({
      _id: comment.blogId
    }).then(function (blog) {
      blog.addcomment(comment._id);
      blog.save();
      res.json({
        comment: comment
      });
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

  reactHotLoader.register(router, "router", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/routes/blogcontent.js");
  reactHotLoader.register(castUserId, "castUserId", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/routes/blogcontent.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/routes/blogcontent.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();