import { Request, Response } from 'express';
import VerifyEmailUseCase from '../usecases/verifyEmail.usecase';

export function verifyEmailController(req: Request, res: Response) {
    const { token } = req.query;

    try {
        const email = VerifyEmailUseCase.verifyEmail({ token: token as string });
        res.json({ message: `Email verificado com sucesso para ${email}` });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
