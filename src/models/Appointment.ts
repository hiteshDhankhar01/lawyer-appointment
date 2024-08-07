import mongoose, { Document, Model, Schema } from "mongoose";

export interface IAppointment extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    name: string;
    email: string;
    phoneNo: number;
    date: string;
    service: string;
    status: string;
    message?: string;
}

const AppointmentSchema: Schema<IAppointment> = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: Number,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        service: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

const Appointment: Model<IAppointment> =
    mongoose.models.Appointment ||
    mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;