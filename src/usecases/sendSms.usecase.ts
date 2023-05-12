import { CodeService } from '../services/code.service';
import { SendSmsService } from '../services/sendSms.service';

export class SendSmsUseCase {
    private sendSmsService: SendSmsService;

    private codeService: CodeService;

    constructor(sendSmsService: SendSmsService, codeService: CodeService) {
        this.sendSmsService = sendSmsService;
        this.codeService = codeService;
    }

    async execute(phoneNumber: string): Promise<void> {
        const verificationCode = this.codeService.generateCode();

        const message = `Seu código de verificação é: ${verificationCode}`;
        await this.sendSmsService.execute({ to: phoneNumber, body: message });

        return;
    }
}
