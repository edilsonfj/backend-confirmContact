import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.EMAIL_HOST as string;
const port = parseInt(process.env.EMAIL_PORT || '0');
const user = process.env.EMAIL_USER as string;
const pass = process.env.EMAIL_PASS as string;

export default function createTransporter(): nodemailer.Transporter {
    return nodemailer.createTransport({
        host: host,
        port: port,
        auth: {
            user: user,
            pass: pass
        }
    });
}

