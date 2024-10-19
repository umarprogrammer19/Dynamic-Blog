import React from "react";
import { blogs, Blogs } from "@/blogs/blogs"

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl">Good Mornig Readers</h1>
      {
        blogs.length > 0 && blogs.map((blog: Blogs) => {
          return <div key={blog.id} className="border border-[black] m-4 p-2">
            <h2 className="text-xl">{blog.title}</h2>
            <p>By {blog.author} on {blog.date}</p>
            <p>{blog.content}</p>
          </div>
        })
      }
    </>
  );
}
