import React from 'react';
import { Blogs, blogs } from "@/blogs/blogs";

export default function Blog(props: { params: { id: string } }) {
    const getBlogs = blogs.find((item: Blogs) => item.id === parseInt(props.params.id));

    if (!getBlogs) {
        return <h1>Blog Bot Found</h1>
    }

    return (
        <>
            <div className="blog-details">
                <h1 className="text-3xl">{getBlogs.title}</h1>
                <p className="text-sm text-gray-500">By {getBlogs.author} on {getBlogs.date}</p>
                <div className="blog-content">
                    <p>{getBlogs.content}</p>
                </div>
            </div>
        </>
    )
}

