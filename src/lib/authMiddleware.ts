import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (req: NextRequest) => {
    const token = req.headers.get('authorization')?.split(' ')[1];

    if (!token) {
        return NextResponse.json({ message: 'No token provided' }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string);
        req.user = decoded;
    } catch (error) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
};
