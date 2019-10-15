"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

require('dotenv').config();

//import uniqueValidator from 'mongoose-unique-validator';

/*
Mongoose's findOneAndUpdate() long pre-dates the MongoDB driver's findOneAndUpdate() function,
so it uses the MongoDB driver's findAndModify() function instead.
You can opt in to using the MongoDB driver's findOneAndUpdate() function using the 
useFindAndModify global option.
*/
_mongoose.default.set('useFindAndModify', false);

var schema = new _mongoose.default.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    index: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  description: {
    type: String
  },
  passwordHash: {
    type: String,
    required: true
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  confirmationToken: {
    type: String,
    default: ""
  }
}, {
  timestamps: true
});

schema.methods.isValidPassword = function isValidPassword(password) {
  return _bcrypt.default.compareSync(password, this.passwordHash);
};

schema.methods.setPassword = function setPassword(password) {
  this.passwordHash = _bcrypt.default.hashSync(password, 10);
};

schema.methods.setConfirmationToken = function setConfirmationToken() {
  this.confirmationToken = this.generateJWT();
};

schema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
  return "http://localhost:8000/confirmation/".concat(this.confirmationToken);
};
/*schema.methods.generateResetPasswordToken = function generateResetPasswordToken(){
	return jwt.sign(
	{
		_id:this._id
	},
	process.env.JWT_SECRET,
	{expiresIn:"1h"}
	);
};*/

/*schema.methods.generateResetPasswordLink = function generateResetPasswordLink(){
	return `${process.env.HOST}/reset_password/${this.generateResetPasswordToken()}`
}*/


schema.methods.generateJWT = function generateJWT() {
  return _jsonwebtoken.default.sign({
    email: this.email,
    username: this.username,
    confirmed: this.confirmed
  }, process.env.JWT_SECRET);
};

schema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    username: this.username,
    confirmed: this.confirmed,
    token: this.generateJWT()
  };
}; //schema.plugin(uniqueValidator,{message:"This email is already taken"});


var _default = _mongoose.default.model('User', schema);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(schema, "schema", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/models/User.js");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/server/models/User.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();