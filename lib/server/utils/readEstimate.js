"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var WORDS_PER_MIN = 275;
var IMAGE_READ_TIME = 12;
var CHINESE_KOREAN_READ_TIME = 500;
var IMAGE_TAGS = ['img', 'Image'];

function stripWhitespace(string) {
  return string.replace(/^\s+/, '').replace(/\s+$/, '');
}

function imageCount(imageTags, string) {
  var combinedImageTags = imageTags.join('|');
  var pattern = "<(".concat(combinedImageTags, ")([\\w\\W]+?)[\\/]?>");
  var reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function imageReadTime(string) {
  var customImageTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IMAGE_READ_TIME;
  var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : IMAGE_TAGS;
  var seconds = 0;
  var count = imageCount(tags, string);

  if (count > 10) {
    seconds = count / 2 * (customImageTime + 3) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    seconds = count / 2 * (2 * customImageTime + (1 - count)); // n/2[2a+(n-1)d]
  }

  return {
    time: seconds / 60,
    count: count
  };
}

function stripTags(string) {
  var pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>';
  var reg = new RegExp(pattern, 'gi');
  return string.replace(reg, '');
}

function wordsCount(string) {
  var pattern = '\\w+';
  var reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
} // Chinese / Japanese / Korean 


function otherLanguageReadTime(string) {
  var pattern = "[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF66-\uFF9F]";
  var reg = new RegExp(pattern, 'g');
  var count = (string.match(reg) || []).length;
  var time = count / CHINESE_KOREAN_READ_TIME;
  var formattedString = string.replace(reg, '');
  return {
    count: count,
    time: time,
    formattedString: formattedString
  };
}

function wordsReadTime(string) {
  var wordsPerMin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WORDS_PER_MIN;

  var _otherLanguageReadTim = otherLanguageReadTime(string),
      characterCount = _otherLanguageReadTim.count,
      otherLanguageTime = _otherLanguageReadTim.time,
      formattedString = _otherLanguageReadTim.formattedString;

  var wordCount = wordsCount(formattedString);
  var wordTime = wordCount / wordsPerMin;
  return {
    characterCount: characterCount,
    otherLanguageTime: otherLanguageTime,
    wordTime: wordTime,
    wordCount: wordCount
  };
}

function humanizeTime(time) {
  if (time < 0.5) {
    return 'less than a minute';
  }

  if (time >= 0.5 && time < 1.5) {
    return '1 min';
  }

  return "".concat(Math.ceil(time), " min");
}

function readTime(string) {
  var _imageReadTime = imageReadTime(string),
      imageTime = _imageReadTime.time,
      imageCount = _imageReadTime.count;

  var strippedString = stripTags(stripWhitespace(string));

  var _wordsReadTime = wordsReadTime(strippedString),
      characterCount = _wordsReadTime.characterCount,
      otherLanguageTime = _wordsReadTime.otherLanguageTime,
      wordTime = _wordsReadTime.wordTime,
      wordCount = _wordsReadTime.wordCount;

  return {
    humanizedDuration: humanizeTime(imageTime + wordTime)
  };
}

var _default = readTime;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WORDS_PER_MIN, "WORDS_PER_MIN", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(IMAGE_READ_TIME, "IMAGE_READ_TIME", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(CHINESE_KOREAN_READ_TIME, "CHINESE_KOREAN_READ_TIME", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(IMAGE_TAGS, "IMAGE_TAGS", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(stripWhitespace, "stripWhitespace", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(imageCount, "imageCount", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(imageReadTime, "imageReadTime", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(stripTags, "stripTags", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(wordsCount, "wordsCount", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(otherLanguageReadTime, "otherLanguageReadTime", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(wordsReadTime, "wordsReadTime", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(humanizeTime, "humanizeTime", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(readTime, "readTime", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/utils/readEstimate.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();