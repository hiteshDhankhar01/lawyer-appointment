import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { ConnectToDB } from '../../../lib/mongoDB';
import User from '../../../models/User';

export async function POST(req: Request) {
    await ConnectToDB();
    
    const { email, password } = await req.json();

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 400 });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return NextResponse.json({ message: "Please fill correct details" }, { status: 400 });
        }

        // Convert mongoose document to plain JavaScript object and remove sensitive information
        const { password: userPassword, ...userWithoutPassword } = user.toObject();

        return NextResponse.json({ message: 'Login successfully!', user: userWithoutPassword }, { status: 200 });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 });
    }
}


// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
// import { ConnectToDB } from '../../../lib/mongoDB';
// import User from '../../../models/User';

// export async function POST(req: Request) {
//     await ConnectToDB();
    
//     const {email, password} = await req.json();

//     try {
//          let user = User.findOne({email})
         
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 400 });
//         }

//         const isPasswordMatch = await bcrypt.compare(password, user.password)

//         if (!isPasswordMatch) {
//             return NextResponse.json({ message: "Please fill correct details" }, { status: 400 });
//         }

//         user = user.toObject()

        

//         return NextResponse.json({ message: 'Login successfully!' },{ status: 201 },{user});
//     } catch (error) {
//         console.error('Server error:', error);
//         return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 });
//     }
// }
