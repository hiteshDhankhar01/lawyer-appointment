import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { ConnectToDB } from '@/lib/mongoDB';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

interface IUser {
    _id: string;
    email: string;
    password: string;
    [key: string]: any;
}

const generateToken = (user: IUser): string => {
    return jwt.sign({ id: user._id }, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string, {
        expiresIn: '28d',
    });
};

export async function POST(req: Request): Promise<NextResponse> {
    await ConnectToDB();

    const { action, name, email, password, gender } = await req.json();

    if (action === 'login') {
        try {
            const user: IUser | null = await User.findOne({ email });

            if (!user) {
                return NextResponse.json({ message: 'User not found' }, { status: 400 });
            }

            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (!isPasswordMatch) {
                return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
            }

            const { password: userPassword, ...userWithoutPassword } = user.toObject();
            const token = generateToken(user);

            return NextResponse.json({ message: 'Login successful!', user: userWithoutPassword, token }, { status: 200 });
        } catch (error) {
            console.error('Server error:', error);
            return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 });
        }
    } else if (action === 'register') {
        try {
            const user: IUser | null = await User.findOne({ email });

            if (user) {
                return NextResponse.json({ message: 'User already exists' }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ name, email, password: hashedPassword, gender });
            await newUser.save();
            const token = generateToken(newUser);

            return NextResponse.json({ message: 'User registered successfully!', newUser, token }, { status: 201 });
        } catch (error) {
            console.error('Server error:', error);
            return NextResponse.json({ error: `Server error..${error}` }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
}
