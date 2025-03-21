import { EMAIL_PASSWORD } from "./env.js";
import nodemailer from 'nodemailer';

export const accountEmail = 'ldravidu@gmail.com'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD
  }
});

export default transporter;