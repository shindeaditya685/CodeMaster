import React from "react";
import { userBlog } from "@/lib/blogs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import BlogsShow from "@/components/BlogsShow";
import { Button } from "@/components/ui/button";
import NavbarForBlogPages from "@/components/Navbars/NavbarForBlogPages";
import { fetchAllBlogsAction } from "@/actions/blogPostAction";
import { parseStringfy } from "@/lib/supportFunctions";
import AllBlogsPage from "@/components/All-Blogs-Page/AllBlogsPage";

const CreateBlog = async () => {
  const user = await currentUser();

  const fetchedBlogs = await fetchAllBlogsAction("/all-blogs");

  const sortedBlogs = fetchedBlogs.sort(
    (a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return <AllBlogsPage user={parseStringfy(user)} sortedBlogs={sortedBlogs} />;
};

export default CreateBlog;
