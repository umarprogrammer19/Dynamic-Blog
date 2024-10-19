import React, { useState } from 'react';
import { Blogs, blogs } from "@/blogs/blogs";

export default function Blog(props: { params: { id: string } }) {
    const getBlogs = blogs.find((item: Blogs) => item.id === parseInt(props.params.id));
    const [comments, setComments] = useState<string[]>([]);

    if (!getBlogs) {
        return <h1>Blog Bot Found</h1>
    }

    return (
        <div className='p-4'>
            <h1>Blog By {getBlogs.author}</h1>
            <div className="blog-details">
                <h1 className="text-3xl">{getBlogs.title}</h1>
                <p className="text-sm text-gray-500">By {getBlogs.author} on {getBlogs.date}</p>
                <div className="blog-content">
                    <p>{getBlogs.content}</p>
                </div>
            </div>

            <h1>Add comment</h1>
            <form>
                <textarea cols={60} rows={6} className='border border-[black]' placeholder="Write Anything" /> <br />
                <button className='bg-blue-700 text-white p-2'>Add Comment</button>
            </form>

        </div>
    )
}

