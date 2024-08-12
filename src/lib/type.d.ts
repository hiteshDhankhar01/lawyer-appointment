import mongoose from "mongoose";

export type RegisterFormDataType = {
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

export type BlogPostType = {
    id: number;
    title: string;
    excerpt: string;
    paragraph: string;
    imageUrl: string;
};

export type AppointmentType = {
    userId: mongoose.Schema.Types.ObjectId;
    _id: string
    name: string;
    email: string;
    phoneNo: number;
    date: Date;
    service: string;
    status: string;
    message?: string;
}

export type AppointmentType2 = {
    userId: mongoose.Schema.Types.ObjectId;
    _id: string
    name: string;
    email: string;
    phoneNo: number;
    date: String;
    service: string;
    status: string;
    message?: string;
}