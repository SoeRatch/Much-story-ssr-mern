"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchcategorycollections = exports.fetchrelatedcollections = exports.fetchcomments = exports.createComment = exports.fetchblog = exports.fetchusercollections = exports.createblogs = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var blogsCreated = function blogsCreated(blog) {
  return {
    type: _types.CREATE_BLOG,
    blog: blog
  };
};

var commentCreated = function commentCreated(comment) {
  return {
    type: _types.CREATE_COMMENT,
    comment: comment
  };
};

var blogFetched = function blogFetched(blog) {
  return {
    type: _types.FETCH_BLOG,
    blog: blog
  };
};

var commentsFetched = function commentsFetched(comments) {
  return {
    type: _types.COMMENTS_FETCHED,
    comments: comments
  };
};

var collectionsFetched = function collectionsFetched(blogcollections) {
  return {
    type: _types.USER_COLLECTIONS_FETCHED,
    blogcollections: blogcollections
  };
};

var relatedFetched = function relatedFetched(blogcollections) {
  return {
    type: _types.RELATED_FETCHED,
    blogcollections: blogcollections
  };
};

var categoryCollectionFetched = function categoryCollectionFetched(blogcollections) {
  return {
    type: _types.CATEGORY_COLLECTION_FETCHED,
    blogcollections: blogcollections
  };
};

var createblogs = function createblogs(blog) {
  return function (dispatch) {
    return _axios.default.post("/api/blogcontent", {
      blog: blog
    }).then(function (res) {
      return res.data.blog;
    }).then(function (blog) {
      dispatch(blogsCreated(blog));
    });
  };
};

exports.createblogs = createblogs;

var fetchusercollections = function fetchusercollections() {
  return function (dispatch) {
    return _axios.default.get("/api/collections/usercollections").then(function (res) {
      return res.data.blogcollections;
    }).then(function (blogcollections) {
      dispatch(collectionsFetched(blogcollections));
    });
  };
};

exports.fetchusercollections = fetchusercollections;

var fetchblog = function fetchblog(parameter) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      _axios.default.get("/api/blogcontent", {
        params: {
          parameter: parameter
        }
      }).then(function (res) {
        return res.data.blog;
      }).then(function (blog) {
        dispatch(blogFetched(blog));
        resolve(blog);
      });
    });
  };
};

exports.fetchblog = fetchblog;

var createComment = function createComment(data) {
  return function (dispatch) {
    return _axios.default.post("/api/blogcontent/comments", {
      data: data
    }).then(function (res) {
      return res.data.comment;
    }).then(function (comment) {
      dispatch(commentCreated(comment));
    });
  };
};

exports.createComment = createComment;

var fetchcomments = function fetchcomments(blogid) {
  return function (dispatch) {
    return _axios.default.get("/api/blogcontent/comments", {
      params: {
        blogid: blogid
      }
    }).then(function (res) {
      return res.data.comments;
    }).then(function (comments) {
      dispatch(commentsFetched(comments));
    });
  };
};

exports.fetchcomments = fetchcomments;

var fetchrelatedcollections = function fetchrelatedcollections(category) {
  return function (dispatch) {
    return _axios.default.get("/api/collections/related", {
      params: {
        category: category,
        limit: 3
      }
    }).then(function (res) {
      return res.data.blogcollections;
    }).then(function (blogcollections) {
      dispatch(relatedFetched(blogcollections));
    });
  };
};

exports.fetchrelatedcollections = fetchrelatedcollections;

var fetchcategorycollections = function fetchcategorycollections(category) {
  return function (dispatch) {
    return _axios.default.get("/api/collections/related", {
      params: {
        category: category,
        limit: 20
      }
    }).then(function (res) {
      return res.data.blogcollections;
    }).then(function (blogcollections) {
      dispatch(categoryCollectionFetched(blogcollections));
    });
  };
};

exports.fetchcategorycollections = fetchcategorycollections;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(blogsCreated, "blogsCreated", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(commentCreated, "commentCreated", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(blogFetched, "blogFetched", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(commentsFetched, "commentsFetched", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(collectionsFetched, "collectionsFetched", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(relatedFetched, "relatedFetched", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(categoryCollectionFetched, "categoryCollectionFetched", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(createblogs, "createblogs", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(fetchusercollections, "fetchusercollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(fetchblog, "fetchblog", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(createComment, "createComment", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(fetchcomments, "fetchcomments", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(fetchrelatedcollections, "fetchrelatedcollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
  reactHotLoader.register(fetchcategorycollections, "fetchcategorycollections", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/shared/actions/blogs.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();