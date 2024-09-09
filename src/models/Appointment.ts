import mongoose, { Document, Model, Schema } from "mongoose";
import { AppointmentType } from "@/lib/type";

const AppointmentSchema: Schema<AppointmentType> = new Schema(
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
        phone: {
            type: Number,
            required: true,
        },
        appointmentDate:  {
            type: Date,
            required: true,
        },
        appointmentTime:  {
            type: String,
        },
        service: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "scheduled", "completed", "canceled"],
            default: "pending",
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