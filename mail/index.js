var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.google.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    requireTLS: true,
    auth: {
        user: 'key', // generated ethereal user
        pass: '*************', // generated ethereal password
    },
});

let info = {
    from: 'help@gmail.com', // sender address
    to: "shubham@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
};
transporter.sendMail(info, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log('Mail sent successfully', info.response);
    }
});