import { NextResponse, NextRequest } from 'next/server';
import { ConnectToDB } from '@/lib/mongoDB';
import Appointment from '@/models/Appointment';
import mongoose from 'mongoose';
import User from '@/models/User';



export const POST = async (req: NextRequest, { params }: { params: { userId: string } }) => {
    await ConnectToDB();
    try {
        // Parse the request body
        const body = await req.json();
        const { name, email, phoneNo, date, service, status, message } = body;
        const { userId } = params;

        // Validate the user ID
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        // Validate other required fields
        if (!name || !email || !phoneNo || !date || !service) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // Create and save the new appointment
        const newAppointment = new Appointment({
            userId,
            name,
            email,
            phoneNo,
            date,
            service,
            status,
            message,
        });

        const appointment = await newAppointment.save();
        return NextResponse.json({ success: true, data: appointment }, { status: 201 });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
};
// export const POST = async (req: NextRequest) => {
//     await ConnectToDB();
//     try {
//         const body = await req.json();
//         const { user, name, email, phoneNo, date, service, status, message } = body;

//         const user = await User.findById("60f8f9a2b3b8c243d8e9d5d5");

//         if (!user) {
//             return NextResponse.json({ success: false, message: 'User not found' }, { status: 400 });
//             // console.log("User not found");
//         }

//         if (!mongoose.Types.ObjectId.isValid(user)) {
//             return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
//         }



//         if (!user || !name || !email || !phoneNo || !date || !service) {
//             return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
//         }

//         const newAppointment = new Appointment({
//             user,
//             name,
//             email,
//             phoneNo,
//             date,
//             service,
//             status,
//             message,
//         });
//         const appointment = await newAppointment.save();
//         return NextResponse.json({ success: true, data: appointment }, { status: 201 });
//     } catch (err) {
//         return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
//     }
// };

export const GET = async (req: NextRequest, { params }: { params: { userId: string } }) => {
    await ConnectToDB();
    const { userId } = params;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
        return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
    }

    try {
        const appointments = await Appointment.find({ userId: userId });
        if (appointments.length === 0) {
            return NextResponse.json({ success: false, message: 'No appointments found for this user' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: appointments }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ success: false, message: err }, { status: 500 });
    }
};

// export const POST = async (
//     req: NextRequest,

// ) => {
//     await ConnectToDB();
//     try {

//         const body = await req.json();
//         const { user, name, email, phoneNo, date, service, status, message } = body;

//         if (!user || !name || !email || !phoneNo || !date || !service) {
//             return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
//         }

//         const newAppointment = new Appointment({
//             user,
//             name,
//             email,
//             phoneNo,
//             date,
//             service,
//             status,
//             message,
//         });
//         const appointment = await newAppointment.save();
//         return NextResponse.json({ success: true, data: appointment }, { status: 201 });
//     } catch (err) {
//         return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
//     }
// };
// export const GET = async (
//     req: NextRequest,
// ) => {
//     await ConnectToDB();
//     try {
//         const appointment = await Appointment.find({ user: userId });
//         if (!appointment) {
//             return NextResponse.json({ success: false, message: 'No appointments found for this user' }, { status: 404 });
//         }
//         return NextResponse.json({ success: true, data: appointment }, { status: 201 });

//     } catch (err) {
//         return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
//     }
// };
