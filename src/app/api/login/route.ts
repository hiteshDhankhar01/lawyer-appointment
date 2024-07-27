import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { ConnectToDB } from '../../../lib/mongoDB';
import User from '../../../models/User';

export async function POST(req: Request) {
    await ConnectToDB();
    
    const {email, password} = await req.json();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({  email, password: hashedPassword, });
        await newUser.save();

        return NextResponse.json({ message: 'Login successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 });
    }
}
