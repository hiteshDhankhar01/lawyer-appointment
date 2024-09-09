
import { ConnectToDB } from "@/lib/mongoDB";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
    await ConnectToDB()
    try {
        const blogs = await Blog.find();
        return NextResponse.json({ message: 'User registered successfully!', blogs }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: `Server error..${error}` }, { status: 500 });
    }
}