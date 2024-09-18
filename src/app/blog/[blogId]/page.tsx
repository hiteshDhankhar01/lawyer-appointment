"use client"

import BlogDetails from "@/components/Blog/BlogDetails";
import { BlogType } from "@/lib/type";
import { useEffect, useState } from "react";

const BlogDetailsPage = ({ params }: { params: { blogId: string } }) => {
    const blogId = params.blogId;
    const [blogDetails, setBlogDetails] = useState<BlogType | undefined>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAllBlogs = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/blog/${blogId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();

                    setBlogDetails(data.data)
                    setLoading(false)
                }
                else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllBlogs()
    }, [])
    return loading ? (
        <h2 className="text-white text-center">Loading...</h2>
    ) : (
        <BlogDetails blog={blogDetails} />
    )
}

export default BlogDetailsPage;