import VerifyTokenService from '../services/verifyToken.service';
import { VerifyEmailUseCaseParams } from '../interfaces/verifyEmailUseCaseParams';

export default class VerifyEmailUseCase {
    static verifyEmail({ token }: VerifyEmailUseCaseParams) {
        const decoded = VerifyTokenService.verifyToken(token);
        return decoded;
    }
}
