import { Twilio } from 'twilio';
import { VerifySmsCode } from '../interfaces/verifySmsCode';
require('dotenv').config();

const twilioVerifySid = process.env.TWILIO_VERIFY_SERVICE_SID as string;

export class VerifySmsCodeService {
    private readonly smsVerificationCodes: VerifySmsCode = {};

    constructor(private readonly twilio: Twilio) { }

    public setSmsVerificationCode(phoneNumber: string, code: string): void {
        this.smsVerificationCodes[phoneNumber] = code;
        console.log(`Código de verificação ${code} definido para o número ${phoneNumber}`);
    }

    public async verifySmsCode(phoneNumber: string, code: string): Promise<boolean> {
        const storedCode = this.smsVerificationCodes[phoneNumber];

        if (!storedCode) {
            return false;
        }

        if (storedCode !== code) {
            return false;
        }

        delete this.smsVerificationCodes[phoneNumber];

        try {
            const verificationResult = await this.twilio.verify
                .services(twilioVerifySid)
                .verificationChecks.create({ to: phoneNumber, code: code });

            return verificationResult.status === 'aprovado';
        } catch (error) {
            console.error(`Erro ao verificar o código SMS: ${error}`);
            return false;
        }
    }
}
