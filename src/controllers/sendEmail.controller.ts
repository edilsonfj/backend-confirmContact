import { Request, Response } from 'express';
import SendEmailUseCase from '../usecases/sendEmail.usecase';

export async function sendEmailController(req: Request, res: Response) {
    const { to, subject, body } = req.body;

    try {
        await SendEmailUseCase.sendEmail({ to, subject, body });
        res.json({ message: 'Email enviado com sucesso' });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
