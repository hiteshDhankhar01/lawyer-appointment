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
        phoneNo: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        service: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "confirmed", "completed", "canceled"],
            default: "pending",
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

const Appointment: Model<AppointmentType> =
    mongoose.models.Appointment ||
    mongoose.model<AppointmentType>("Appointment", AppointmentSchema);

export default Appointment;