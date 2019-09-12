const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'rollinroman@gmail.com',
        pass: ''
    }
});

const mailOptions = {
  from: 'rollinroman@gmail.com', // sender address
  to: 'rrosenas@students.pitzer.edu', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
