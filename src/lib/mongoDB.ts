import mongoose from 'mongoose';
import { updateAppointmentStatuses } from './updateAppointmentStatuses';

export const ConnectToDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI || "", { dbName: 'LawyerMeet' })
        console.log(`mongoose is connected with ${mongoose.connection.host}`);
        await updateAppointmentStatuses();
    } catch (error) {
        console.log(error);
    }
};
