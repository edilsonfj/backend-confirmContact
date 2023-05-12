import { SendEmailService } from "../services/sendEmail.service";
import { TokenService } from "../services/token.service";
import { SendEmailToken } from "../interfaces/sendEmailToken";

export class SendEmailUseCase {
    static async sendEmail({ to, subject, body }: SendEmailToken) {
        const token = TokenService.generateToken(to);
        const url = `http://localhost:3000/verify-email?token=${token}`;
        const sendEmailService = new SendEmailService();
        await sendEmailService.sendEmail(to, subject, `${body} <br><br>Para verificar seu email, acesse <a href="${url}">${url}</a>`);
    }
}
