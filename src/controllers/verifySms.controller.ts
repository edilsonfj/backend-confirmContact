import { Request, Response } from 'express';
import { Twilio } from 'twilio';
import { VerifySmsCodeService } from '../services/verifySmsCode.service';
import { VerifySmsUseCase } from '../usecases/verifySms.usecase';
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = new Twilio(accountSid, authToken);

const verifySmsCodeService = new VerifySmsCodeService(twilio);

const verifySmsUseCase = new VerifySmsUseCase(verifySmsCodeService);

export async function verifySmsCode(req: Request, res: Response): Promise<void> {
    const { phoneNumber, code } = req.body;

    try {
        const isCodeValid = await verifySmsUseCase.execute(phoneNumber, code);

        if (isCodeValid) {
            res.status(200).json({ message: 'Código validado' });
        } else {
            res.status(400).json({ message: 'Código inválido' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao verificar o código SMS' });
    }
}


