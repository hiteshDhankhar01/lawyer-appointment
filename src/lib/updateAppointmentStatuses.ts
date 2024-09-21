import Appointment from "@/models/Appointment";

export const updateAppointmentStatuses = async () => {
    try {
        const currentDate = new Date();

        await Appointment.updateMany(
            { status: "Pending", appointmentDate: { $lt: currentDate } },
            { $set: { status: "Cancel" } }
        );

        await Appointment.updateMany(
            { status: "Schedule", appointmentDate: { $lt: currentDate } },
            { $set: { status: "Complete" } }
        );

        console.log("Appointment statuses updated successfully.");
    } catch (error) {
        console.error("Failed to update appointment statuses:", error);
    }
};