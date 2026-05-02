import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET || 'secret123', {
        expiresIn: '15d',
    });

    res.cookie('jwt-token', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true, // prevent XSS attacks
        sameSite: 'strict', // prevent CSRF attacks
        secure: process.env.NODE_ENV !== 'development',
    });
};

export default generateTokenAndSetCookie;
