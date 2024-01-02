const nodemailer = require("nodemailer");
const User = require("../models/UserModel");
const dotenv = require("dotenv");
dotenv.config();

const sendEmail = async (email) => {
  const code = Math.floor(1000 + Math.random() * 9000).toString();
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  let info = await transporter.sendMail({
    from: '"Nguyen Tuan Anh" <anhhihi564@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Verification Code", // Subject line
    text: `Your verification code is: ${code}`, // plain text body
    html: `<p>Your verification code is: <strong>${code}</strong></p>`, // html body
  });

  try {
    await User.findOneAndUpdate({ email: email }, { messageEmail: code });
    console.log("Code saved to database.");
  } catch (err) {
    console.error("Error saving code to database:", err);
  }

  return info;
};
const checkCodeEmail = (id, messageEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({
        _id: id,
      });
      if (user === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined",
        });
      }
      if (user.messageEmail === messageEmail) {
        resolve({
          status: "OK",
          message: "SUCCESS: Message email matched",
          data: user,
        });
      } else {
        resolve({
          status: "ERR",
          message: "ERROR: Message email does not match",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { sendEmail, checkCodeEmail };
