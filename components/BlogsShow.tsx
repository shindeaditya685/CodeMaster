"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { truncateText } from "@/lib/supportFunctions";
import ReactTimeAgo from "./Time-Ago/ReactTimeAgo";
import Image from "next/image";

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
    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
      <h1 className="md:text-4xl text-3xl font-bold text-white text-center mb-8">
        {blogHeading}
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <div
              key={blog._id}
              onClick={() => handleClick(blog._id)}
              className="bg-gray-800 cursor-pointer shadow-lg rounded-lg overflow-hidden mb-6"
              style={{ height: "250px" }} 
            >
              <div className="p-6 h-full flex flex-col">
                <h1 className="md:text-2xl text-xl font-bold mb-2 text-white">
                  {truncateText(blog.title, 100)}
                </h1>
                <p className="text-sm md:text-[1rem] text-gray-300 mb-2 flex-grow overflow-hidden">
                  {truncateText(blog.description, 600)}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <span className="bg-gray-700 text-gray-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                      {blog.likes} likes
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-700 text-blue-200 text-xs font-semibold mr-2 mb-1 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 md:text-md text-xs text-gray-300">
                    <ReactTimeAgo createdAt={blog.createdAt.toString()} />
                    <span>by</span>
                    <Image
                      src={blog.imageUrl}
                      alt="creater-img"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>
                      {blog.userFirstName} {blog.userLastName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogsShow;
