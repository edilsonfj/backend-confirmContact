import { Request, Response } from 'express';
import { SendSmsService } from '../services/sendSms.service';
import { CodeService } from '../services/code.service';
import { SendSmsUseCase } from '../usecases/sendSms.usecase';

const sendSmsService = new SendSmsService();
const codeService = new CodeService();

const sendSmsUseCase = new SendSmsUseCase(sendSmsService, codeService);

export async function sendVerificationCode(req: Request, res: Response): Promise<void> {
    const { phoneNumber } = req.body;

    try {
        await sendSmsUseCase.execute(phoneNumber);
        res.status(200).json({ message: 'SMS enviado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Falha ao enviar o SMS' });
    }
}

