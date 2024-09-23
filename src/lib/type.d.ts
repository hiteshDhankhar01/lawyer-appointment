import mongoose from "mongoose";

export type UserType = {
    _id?: string;
    name: string;
    email: string;
    password: string;
    gender: string;
}

export type ServiceType = {
    title: string;
    description: string;
};

export type ServiceType = {
    title: string;
    description: string;
};

export type BlogType = {
    _id: number;
    title: string;
    excerpt: string;
    paragraph: string;
    image: string;
    createAt?: date;
};
export type teamMemberType = {
    name: string;
    role: string;
    image: string;
};

export type AppointmentType = {
    userId: mongoose.Schema.Types.ObjectId;
    _id: string
    name: string;
    email: string;
    appointmentDate: string;
    service: string;
    status?: string;
    message?: string;
    notes?: string;
}

export type faqType = {
    question: string;
    answer: string;
};