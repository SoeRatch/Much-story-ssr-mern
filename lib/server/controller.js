"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentPage = exports.blogPage = exports.dashboardPage = exports.homePage = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var homePage = function homePage() {
  return {};
};

exports.homePage = homePage;

var dashboardPage = function dashboardPage() {
  return {
    collections: {
      blogs: [{
        _id: "",
        title: "",
        thumbnail_url: "",
        description: "",
        votes: "",
        category: "",
        username: ""
      }]
    }
  };
};

exports.dashboardPage = dashboardPage;

var blogPage = function blogPage(blog) {
  return {
    blogcontent: blog
  };
};

exports.blogPage = blogPage;

var commentPage = function commentPage() {
  return {};
};

exports.commentPage = commentPage;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(homePage, "homePage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/controller.js");
  reactHotLoader.register(dashboardPage, "dashboardPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/controller.js");
  reactHotLoader.register(blogPage, "blogPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/controller.js");
  reactHotLoader.register(commentPage, "commentPage", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/controller.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();