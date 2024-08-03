

// type Data =
//     | { success: boolean; data: IAppointment[] | null; message?: string }
//     | { success: boolean; message: string };

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const { method } = req;
//     const { userId } = req.query;

//     await ConnectToDB();

//     if (!mongoose.Types.ObjectId.isValid(userId as string)) {
//         return res.status(400).json({ success: false, message: 'Invalid user ID' });
//     }

//     switch (method) {
//         case 'GET':
//             try {
//                 const appointments = await Appointment.find({ user: userId });
//                 if (!appointments) {
//                     return res.status(404).json({ success: false, message: 'No appointments found for this user' });
//                 }
//                 res.status(200).json({ success: true, data: appointments });
//             } catch (error) {
//                 res.status(400).json({ success: false, message: 'Failed to fetch appointments' });
//             }
//             break;

//         default:
//             res.status(405).json({ success: false, message: 'Method Not Allowed' });
//             break;
//     }
// }


// import { NextResponse } from 'next/server';
// import { ConnectToDB } from '@/lib/mongoDB';
// import Appointment, { IAppointment } from '@/models/Appointment';

// type Data =
//     | { success: boolean; data: IAppointment[] | IAppointment | null; message?: string }
//     | { success: boolean; message: string };

// export async function GET() {
//     await ConnectToDB();

//     try {
//         const appointments = await Appointment.find({});
//         return NextResponse.json({ success: true, data: appointments });
//     } catch (error) {
//         return NextResponse.json({ success: false, message: 'Failed to fetch appointments' }, { status: 400 });
//     }
// }

// export async function POST(req: Request) {
//     await ConnectToDB();

//     try {
//         const body = await req.json();
//         const { user, name, email, phoneNo, date, service, message } = body;

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
//             message,
//         });

//         const appointment = await newAppointment.save();
//         return NextResponse.json({ success: true, data: appointment }, { status: 201 });
//     } catch (error) {
//         return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
//     }
// }

// export async function DELETE() {
//     return NextResponse.json({ success: false, message: 'Method Not Allowed' }, { status: 405 });
// }


// // pages/api/appointments/[userId].ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { ConnectToDB } from '@/lib/mongoDB';
// import Appointment, { IAppointment } from '@/models/Appointment';
// import mongoose from 'mongoose';

// type Data =
//   | { success: boolean; data: IAppointment[] | null; message?: string }
//   | { success: boolean; message: string };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const { method } = req;
//   const { userId } = req.query;

//   await ConnectToDB();

//   if (!mongoose.Types.ObjectId.isValid(userId as string)) {
//     return res.status(400).json({ success: false, message: 'Invalid user ID' });
//   }

//   switch (method) {
//     case 'GET':
//       try {
//         const appointments = await Appointment.find({ user: userId });
//         if (!appointments) {
//           return res.status(404).json({ success: false, message: 'No appointments found for this user' });
//         }
//         res.status(200).json({ success: true, data: appointments });
//       } catch (error) {
//         res.status(400).json({ success: false, message: 'Failed to fetch appointments' });
//       }
//       break;

//     default:
//       res.status(405).json({ success: false, message: 'Method Not Allowed' });
//       break;
//   }
// }
