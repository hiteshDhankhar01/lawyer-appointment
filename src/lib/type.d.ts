import mongoose from "mongoose";

export type AppointmentType = {
    userId: mongoose.Schema.Types.ObjectId;
    name: string;
    email: string;
    phoneNo: number;
    date: Date;
    service: string;
    status: string;
    message?: string;
}