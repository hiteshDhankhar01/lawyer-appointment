import mongoose from 'mongoose';
import { updateAppointmentStatuses } from './updateAppointmentStatuses';

export const ConnectToDB = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/LawyerMeet');
        console.log(`mongoose is connected with ${mongoose.connection.host}`);
        await updateAppointmentStatuses();
    } catch (error) {
        console.log(error);
    }
};
