"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _BlogContent = _interopRequireDefault(require("../models/BlogContent"));

var _User = _interopRequireDefault(require("../models/User"));

var _parseErrors = _interopRequireDefault(require("../utils/parseErrors"));

var _authenticate = _interopRequireDefault(require("../middlewares/authenticate"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var router = _express.default.Router();

var castUserId = function castUserId(userId) {
  return _mongoose.default.Types.ObjectId(userId);
};

router.get('/type', function (req, res) {
  var type = req.query.type;
  var limit_query = req.query.limit || 3;
  limit_query = Number(limit_query);
  var skip_query = req.query.skip || 9;
  skip_query = Number(skip_query);

  _BlogContent.default.aggregate([{
    $sort: {
      createdAt: -1
    }
  }, {
    $limit: limit_query
  }, {
    $skip: skip_query
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
      title: 1,
      thumbnail_url: 1,
      description: 1,
      votes: 1,
      category: 1,
      username: "$resulting.username"
    }
  }]).exec(function (err, results) {
    var blogcollections = results;
    res.json({
      blogcollections: blogcollections
    });
  });
});
router.get('/related', function (req, res) {
  var category = req.query.category;
  var limit_query = req.query.limit || 3;
  limit_query = Number(limit_query);

  _BlogContent.default.aggregate([{
    $sort: {
      createdAt: -1
    }
  }, {
    $match: {
      category: category
    }
  }, {
    $limit: limit_query
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
      title: 1,
      thumbnail_url: 1,
      description: 1,
      votes: 1,
      category: 1,
      username: "$resulting.username"
    }
  }]).exec(function (err, results) {
    var blogcollections = results;
    res.json({
      blogcollections: blogcollections
    });
  });
});
router.use(_authenticate.default);
router.get('/usercollections', function (req, res) {
  /*BlogContent.find({userId:req.currentUser._id},{title:1,_id:1})
  	.then(blogcollections=>res.json({blogcollections}));*/
  _BlogContent.default.aggregate([// or use like this => db.collection("blogcontents").aggregate([
  {
    $match: {
      userId: req.currentUser._id
    }
  }, {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "resulting"
    }
  },
  /*{$project:{
  	    title: 1,
  	    resulting:{ username:true }
  	}}*/

  /*
  {
  	$unwind:{ path: "$resulting" }
  },
   {
  	$project: {
                    midEq: {$eq: ["$userId", "$resulting._id"]},
                    title:1,username:"$resulting.username"
                  }},
                     {
                    $match: {
                    	$and:[
                       {title: {$exists:true}},
                       {midEq: {$eq:true}}
                  ]}},
                   */
  {
    $unwind: {
      path: "$resulting"
    }
  }, {
    $project: {
      _id: 1,
      title: 1,
      thumbnail_url: 1,
      description: 1,
      votes: 1,
      category: 1,
      username: "$resulting.username"
    }
  }]).exec(function (err, results) {
    var blogcollections = results;
    res.json({
      blogcollections: blogcollections
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

  reactHotLoader.register(router, "router", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/routes/collections.js");
  reactHotLoader.register(castUserId, "castUserId", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/routes/collections.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/routes/collections.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();