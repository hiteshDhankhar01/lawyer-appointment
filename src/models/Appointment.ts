import mongoose, { Document, Model, Schema } from "mongoose";

// Correcting the interface
interface AppointmentType extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    name: string;
    email: string;
    appointmentDate: Date;
    service: string;
    status?: string;
    message?: string;
    notes?: string;
}

// Corrected Schema
const AppointmentSchema: Schema<AppointmentType> = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        appointmentDate: {
            type: Date,
            required: true,
        },
        service: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "Pending",
        },
        message: {
            type: String,
        },
        notes: {
            type: String,
        },
    },
    { timestamps: true }
);

const Appointment: Model<AppointmentType> =
    mongoose.models.Appointment ||
    mongoose.model<AppointmentType>("Appointment", AppointmentSchema);

export default Appointment;
