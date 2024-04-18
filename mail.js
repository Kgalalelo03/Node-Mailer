"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "",
  port: 587,
  secure: false,
  auth: {
    
    user: "Emai address",
    pass: "type password",
  },
});


async function main() {
 
  const info = await transporter.sendMail({
    from: '"me" <email>', 
    to: "reciever email", 
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
 
}

main().catch(console.error);
