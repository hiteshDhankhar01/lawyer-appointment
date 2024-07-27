import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { ConnectToDB } from '../../../lib/mongoDB';
import User from '../../../models/User';

export async function POST(req: Request) {
    await ConnectToDB();
    
    const { name, email, password, gender } = await req.json();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, gender });
        await newUser.save();

        return NextResponse.json({ message: 'User registered successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 });
    }
}


// import type { NextApiRequest, NextApiResponse } from 'next';
// import bcrypt from 'bcryptjs';
// import { ConnectToDB } from '../../../lib/mongoDB';
// import User from '../../../models/User';

// interface RegisterRequest extends NextApiRequest {
//     body: {
//         name: string;
//         email: string;
//         password: string;
//         gender: string;
//     };
// }

// export default async function handler(req: RegisterRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         await ConnectToDB();

//         const { name, email, password, gender } = req.body;

//         try {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             const newUser = new User({ name, email, password: hashedPassword, gender });
//             await newUser.save();

//             res.status(201).json({ message: 'User registered successfully!' });
//         } catch (error) {
//             res.status(500).json({ error: 'Server error. Please try again later.' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }
