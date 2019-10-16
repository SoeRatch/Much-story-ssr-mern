"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendConfirmationEmail = sendConfirmationEmail;
exports.sendGetInTouchEmail = sendGetInTouchEmail;

var _welcomeEmail = _interopRequireDefault(require("./emailTemplates/welcomeEmail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

require('dotenv').config();

var mailgunTransport = require('nodemailer-mailgun-transport');

var nodemailer = require('nodemailer');

var mailgunOptions = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN_NAME
  }
};
var transport = mailgunTransport(mailgunOptions);
var transporter = nodemailer.createTransport(transport);

function sendConfirmationEmail(user) {
  var mailOptions = {
    from: '"Suraj Sharma" <suraj@muchstory.com>',
    to: user.email,
    subject: 'Welcome to Much Story',
    html: (0, _welcomeEmail.default)(user.username, user.generateConfirmationUrl())
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

function sendGetInTouchEmail(email_id, message) {
  var mailOptions = {
    from: '"Suraj Sharma" <suraj@muchstory.com>',
    to: process.env.EMAIL_USER,
    subject: 'Get in touch',
    text: "Hei, you got a --get in touch message-- from ".concat(email_id, " -- ").concat(message)
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mailgunOptions, "mailgunOptions", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/mailer.js");
  reactHotLoader.register(transport, "transport", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/mailer.js");
  reactHotLoader.register(transporter, "transporter", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/mailer.js");
  reactHotLoader.register(sendConfirmationEmail, "sendConfirmationEmail", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/mailer.js");
  reactHotLoader.register(sendGetInTouchEmail, "sendGetInTouchEmail", "/home/suraj/Desktop/JohnyBravo/astav/Production/recheck/MUCH-STORY/src/server/mailer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();