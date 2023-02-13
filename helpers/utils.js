const nodemailer = require('nodemailer');


const sendEmail = (subject,text,notification,emailContact) => {   
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
        },
    });    
    const mailDate = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_ADMIN,
        subject: subject,
        text: text,
        html: notification
    };
    const mailDate2 = {
        from: emailContact,
        to: process.env.MAIL_ADMIN,
        subject: subject,
        text: text,
        html: notification
    }
    transporter.sendMail(mailDate);
    transporter.sendMail(mailDate2)
        
}

module.exports = {
    sendEmail
}