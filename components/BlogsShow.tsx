"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { truncateText } from "@/lib/supportFunctions";

const BlogsShow = ({
  blogs,
  blogHeading,
}: {
  blogs: BlogType[];
  blogHeading: string;
}) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">{blogHeading}</h1>
      {blogs.length > 0 &&
        blogs.map((blog) => (
          <div
            key={blog._id}
            onClick={() => handleClick(blog._id)}
            className="bg-gray-800 cursor-pointer shadow-lg rounded-lg overflow-hidden mb-6"
          >
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2 text-white">
                {blog.title}
              </h1>
              <p className="text-gray-300 mb-4">
                {truncateText(blog.description, 200)}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="bg-gray-700 text-gray-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    100 {blog.likes} likes
                  </span>
                </div>
                <div className="flex items-center">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-700 text-blue-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogsShow;
