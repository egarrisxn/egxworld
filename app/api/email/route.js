import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer'

const email_user =
  process.env.NODE_ENV === 'production'
    ? process.env.NODEMAILER_EMAIL
    : process.env.NEXT_PUBLIC_NODEMAILER_EMAIL

const email_password =
  process.env.NODE_ENV === 'production'
    ? process.env.NODEMAILER_PASSWORD
    : process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD

export async function POST(req) {
  const {email, name, message} = await req.json()

  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email_user,
      pass: email_password,
    },
  })

  const mailOptions = {
    from: email_user,
    to: email_user,
    subject: `Message from ${name} (${email})`,
    text: message,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({message: 'Email sent successfully'})
  } catch (err) {
    console.error('Error sending email:', err)
    return NextResponse.json({error: 'Failed to send email'}, {status: 500})
  }
}

// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   const { email, name, message } = await req.json();

//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.NODEMAILER_EMAIL,
//       pass: process.env.NODEMAILER_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.NODEMAILER_EMAIL,
//     to: process.env.NODEMAILER_EMAIL,
//     subject: `Message from ${name} (${email})`,
//     text: message,
//   };

//   const sendMailPromise = () =>
//     new Promise((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: "Email sent" });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }
