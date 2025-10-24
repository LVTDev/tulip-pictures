import nodemailer from "nodemailer";
//-----------------------------------------------------------------------------
export async function sendMail(subject: string, toEmail: string, otpText: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL || process.env.NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW || process.env.NODEMAILER_PW ,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL || process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info)
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function sendMailMailingList(subject: string, toEmail: string, otpText: string) {
  const transporterMailingList = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL || process.env.NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW || process.env.NODEMAILER_PW ,
    },
  });

  const mailOptions2 = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL || process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  try {
    const info = await transporterMailingList.sendMail(mailOptions2);
    console.log(info)
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}