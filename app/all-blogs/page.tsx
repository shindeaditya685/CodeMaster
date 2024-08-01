import React from "react";
import { userBlog } from "@/lib/blogs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import BlogsShow from "@/components/BlogsShow";
import { Button } from "@/components/ui/button";
import NavbarForBlogPages from "@/components/Navbars/NavbarForBlogPages";
import { fetchAllBlogsAction } from "@/actions/blogPostAction";
import { parseStringfy } from "@/lib/supportFunctions";

const CreateBlog = async () => {
  const user = await currentUser();

  const fetchedBlogs = await fetchAllBlogsAction("/all-blogs");

  const sortedBlogs = fetchedBlogs.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <>
      <NavbarForBlogPages user={user} />
      <section className="p-8 bg-gray-900 min-h-screen">
        {sortedBlogs && sortedBlogs.length > 0 ? (
          <BlogsShow
            blogs={parseStringfy(sortedBlogs)}
            blogHeading="Dive into All Coding Blogs 🏊‍♂️"
          />
        ) : (
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">
              No blogs available.
            </h1>
          </div>
        )}
      </section>
    </>
  );
};

export default CreateBlog;
