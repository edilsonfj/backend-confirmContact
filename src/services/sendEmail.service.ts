import createTransporter from './transporter.service';
import dotenv from 'dotenv';

dotenv.config();

const from = process.env.EMAIL_FROM as string;

export default class SendEmailService {
    async sendEmail(email: string, subject: string, body: string) {
        const transporter = createTransporter();

        const mailOptions = {
            from: from,
            to: email,
            subject: subject,
            html: body
        };

        await transporter.sendMail(mailOptions);
    }
}