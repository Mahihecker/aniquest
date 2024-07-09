const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "josefina.waters@ethereal.email",
      pass: "yhMPg4usfQ75su5rzs",
    },
  });
  // email options
  const mailOptions = {
    from: "mahi shakeel <hello@mahi.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //active send eamil
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
