import jwt from 'jsonwebtoken';
require('dotenv').config();

const secret = process.env.JWT_SECRET as string;

export class VerifyEmailTokenService {
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
