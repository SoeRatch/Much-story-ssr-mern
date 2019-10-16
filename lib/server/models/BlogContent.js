"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

_mongoose.default.set('useFindAndModify', false);

var schema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  blogdata_htmlstring: String,
  blogdata_string: String,
  description: {
    type: String,
    default: 'description can also be used in meta tags to improve SEO'
  },
  thumbnail_url: {
    type: String,
    default: 'https://res.cloudinary.com/surajsharma/image/upload/v1571055642/muchstoryimages/foggybuildings.jpg'
  },
  votes: {
    type: Number,
    default: 0
  },
  userId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true
  },
  tags: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    required: false
  }],
  comments: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    required: false
  }],
  category: String,
  humanized_duration: String
}, {
  timestamps: true
});

schema.methods.addcomment = function addcomment(comment_id) {
  this.comments.push(comment_id);
};

var _default = _mongoose.default.model('BlogContent', schema);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(schema, "schema", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/models/BlogContent.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/models/BlogContent.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();