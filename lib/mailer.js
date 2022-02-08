const nodemailer = require('nodemailer');
const config = require('../config/config');

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    pool: true,
    host: config.emailHost,
    port: config.emailPort,
    secure: false, // true for 465, false for other ports
    auth: {
        user: config.emailUser,
        pass: config.emailPass,
    },
    tls: {
        rejectUnauthorized: false
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function codeUserMail(userMail, code) {
    var dotName = userMail.split('@');
    var name = dotName[0].split('.');

    // send mail with defined transport object
    var info = await transporter.sendMail({
        from: '"Sistemas No-reply-mail 👻" <sistemas@crown.bo>', // sender address
        to: [userMail, "sistemas@crown.bo"], // list of receivers
        subject: `Verification code ✔`, // Subject line
        //text: "Hello " +userMail+ " world?", // plain text body
        html: `<b> Hello ${name[0]}  ${name[1]} <br> 🍕 Your verification code is: <br> ${code} <br> Use it when you go to login the first time 🎉 </b>`, // html body
    });

    console.log("Message sent %s", info.messageId);
    //Menssage sent:

    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
module.exports = {
    codeUserMail,
};