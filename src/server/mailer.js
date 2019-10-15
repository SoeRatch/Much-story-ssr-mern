require('dotenv').config()

import welcomeEmail from './emailTemplates/welcomeEmail'; 
const mailgunTransport = require('nodemailer-mailgun-transport')
var nodemailer = require('nodemailer');


const mailgunOptions = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN_NAME,
  }
}

const transport = mailgunTransport(mailgunOptions);

var transporter = nodemailer.createTransport(transport);

export function sendConfirmationEmail(user){
	var mailOptions = {
	  from:'"Suraj Sharma" <suraj@muchstory.com>',
	  to: user.email,
	  subject: 'Welcome to Much Story',
	  html: welcomeEmail(user.username,user.generateConfirmationUrl())
	};

	transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		  }
	});
}

export function sendGetInTouchEmail(email_id,message){
	var mailOptions = {
	  from:'"Suraj Sharma" <suraj@muchstory.com>',
	  to: process.env.EMAIL_USER,
	  subject:'Get in touch',
	  text: `Hei, you got a --get in touch message-- from ${email_id} -- ${message}`
	};

	transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		  }
	});
}

