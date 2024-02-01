import { Secret, sign, verify } from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'secret-jwt';

const jwtProvider = {
  generateToken: (payload: any) => sign(payload, JWT_SECRET, { expiresIn: '1d' }),
  verifyToken: (token: string) => verify(token, JWT_SECRET),
};

export default jwtProvider;
