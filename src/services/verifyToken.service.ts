import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export default class VerifyTokenService {
    static verifyToken(token: string) {
        try {
            const decoded = jwt.verify(token, secret);
            if (typeof decoded === 'string') {
                throw new Error('Token inválido');
            }
            return decoded.data;
        } catch (error) {
            console.log(error);
            throw new Error('Token inválido');
        }
    }
}
