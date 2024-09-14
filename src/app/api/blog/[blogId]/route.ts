
import { ConnectToDB } from "@/lib/mongoDB";
import Blog from "@/models/Blog";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { blogId: string } }) => {
    await ConnectToDB();
    try {
        const { blogId } = params;
        if (!mongoose.Types.ObjectId.isValid(blogId)) {
            return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
        }
        
        const blog = await Blog.findById(blogId)

        return NextResponse.json({ success: true, data: blog }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
};
