import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: String,
    excerpt: String,
    image: String,
    paragraph: String,
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema)

export default Blog;