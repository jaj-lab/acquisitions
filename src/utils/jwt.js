import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '1d';

export const jwttoket = {
    sign: (payload) => {
        try {
            return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        } catch (error) {
            logger.error('Failed to auth token\n', error);
            throw new Error('Failed to authenticate token');
        }
    }
    verify: (token) => {
        try {
            return jwt.verify(token, JWT_SECRET)
        } catch (error) {
            logger.error('Failed to verify token\n', error);
            throw new Error('Failed to verify token');
        }
    }
}
