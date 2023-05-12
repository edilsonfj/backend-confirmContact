import { VerifySmsCodeService } from '../services/verifySmsCode.service';

export class VerifySmsUseCase {
    constructor(private readonly verifySmsCodeService: VerifySmsCodeService) { }

    public async execute(phoneNumber: string, code: string): Promise<boolean> {
        return await this.verifySmsCodeService.verifySmsCode(phoneNumber, code);
    }
}

