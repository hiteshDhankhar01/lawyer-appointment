import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { UserType } from './type';
declare module 'next/server' {
    interface NextRequest {
        user?: UserType; 
    }
}

export const authMiddleware = async (req: NextRequest) => {
    const token = req.headers.get('authorization')?.split(' ')[1];
    if (!token) {
        return NextResponse.json({ message: 'No token provided' }, { status: 401 });
    }
    try {
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string) as UserType;
        req.user = decoded;
    } catch (error) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
};
