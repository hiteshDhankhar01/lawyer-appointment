import { NextResponse, NextRequest } from 'next/server';
import { ConnectToDB } from '@/lib/mongoDB';
import Appointment from '@/models/Appointment';
import mongoose from 'mongoose';
import User from '@/models/User';
import { authMiddleware } from '@/lib/authMiddleware';

export const POST = async (req: NextRequest, { params }: { params: { userId: string } }) => {
    const authResponse = await authMiddleware(req);
    if (authResponse) return authResponse;
    await ConnectToDB();
    try {

        const body = await req.json();
        const { name, email, phoneNo, date, service, status, message } = body;
        const { userId } = params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        if (!name || !email || !phoneNo || !date || !service) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        const appointmentDate = new Date(date);
        const currentDate = new Date();
        if (appointmentDate < currentDate) {
            return NextResponse.json({ success: false, message: 'Appointment date cannot be in the past' }, { status: 400 });
        }

        const appointments = await Appointment.find({ userId: userId });
        if (appointments.length > 0) {
            const futureAppointments = appointments.filter(app => new Date(app.date) > new Date());
            if (futureAppointments.length > 0) {
                return NextResponse.json({ success: false, message: 'You already have an appointment booked for a future date' }, { status: 400 });
            }
        }

        const newAppointment = new Appointment({
            userId,
            name,
            email,
            phoneNo,
            date: appointmentDate,
            service,
            status,
            message,
        });

        const appointment = await newAppointment.save();
        return NextResponse.json({ success: true, data: appointment }, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
};

export const GET = async (req: NextRequest, { params }: { params: { userId: string } }) => {
    await ConnectToDB();
    try {
        const { userId } = params;

        // Validate the user ID
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
        }

        // Find the next upcoming appointment for the user
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1);

        console.log(currentDate.toString());

        const upcomingAppointment = await Appointment.findOne({
            userId: userId,
            date: { $gt: currentDate }
        })
            .sort({ date: 1 }); // Sort by date to get the nearest upcoming appointment

        if (!upcomingAppointment) {
            return NextResponse.json({ success: false, message: 'No upcoming appointments found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: upcomingAppointment }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
};

export const GET_ALL_EXCEPT_UPCOMING = async (req: NextRequest, { params }: { params: { userId: string } }) => {
    await ConnectToDB();
    try {
        const { userId } = params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
        }

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1);

        const upcomingAppointment = await Appointment.findOne({
            userId: userId,
            date: { $gt: currentDate }
        }).sort({ date: 1 });

        const allAppointmentsExceptUpcoming = await Appointment.find({
            userId: userId,
            _id: { $ne: upcomingAppointment?._id } // Exclude the upcoming appointment
        });

        return NextResponse.json({ success: true, data: allAppointmentsExceptUpcoming }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
};


export const PUT = async (req: NextRequest, { params }: { params: { userId: string } }) => {
    await ConnectToDB();
    const { userId } = params;
    const appointmentId = userId

    try {
        const body = await req.json();
        const { name, email, phoneNo, date, service, status, message } = body;

        if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
            return NextResponse.json({ success: false, message: 'Invalid appointment ID' }, { status: 400 });
        }

        const updatedAppointment = await Appointment.findByIdAndUpdate(
            appointmentId,
            { name, email, phoneNo, date, service, status, message },
            { new: true, runValidators: true }
        );

        if (!updatedAppointment) {
            return NextResponse.json({ success: false, message: 'Appointment not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updatedAppointment }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
};

export const DELETE = async (req: NextRequest, { params }: { params: { userId: string } }) => {
    await ConnectToDB();

    const { userId } = params;
    const appointmentId = userId
    

    try {
        if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
            return NextResponse.json({ success: false, message: 'Invalid appointment ID' }, { status: 400 });
        }

        const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

        if (!deletedAppointment) {
            return NextResponse.json({ success: false, message: 'Appointment not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Appointment deleted successfully' }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
};