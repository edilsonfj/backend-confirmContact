import jwt from 'jsonwebtoken';
require('dotenv').config();

const secret = process.env.JWT_SECRET as string;

export class TokenService {
    static generateToken(payload: string) {
        const token = jwt.sign({ data: payload }, secret, { expiresIn: "1h" });
        return token;
    }
}
