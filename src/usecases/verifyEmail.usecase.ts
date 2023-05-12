import { VerifyEmailTokenService } from '../services/verifyEmailToken.service';
import { VerifyEmailToken } from '../interfaces/verifyEmailToken';

export class VerifyEmailUseCase {
    static verifyEmail({ token }: VerifyEmailToken) {
        const decoded = VerifyEmailTokenService.verifyToken(token);
        return decoded;
    }
}
