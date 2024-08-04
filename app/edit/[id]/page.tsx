import React from "react";
import { BlogFormOwn } from "@/components/Blog-Form/BlogFormOwn";
import NavbarForProfile from "@/components/Navbars/NavbarForProfile";
import { fetchByBlogIdAction } from "@/actions/blogPostAction";
import { parseStringfy } from "@/lib/supportFunctions";
import { currentUser } from "@clerk/nextjs/server";

const Edit = async ({ params: { id } }: BlogPageProps) => {
  const fetchedBlog = await fetchByBlogIdAction(id, `/blog/${id}`);
  const user = await currentUser();
  const blog = parseStringfy(fetchedBlog);

  return (
    <div className="w-full">
      <NavbarForProfile />
      <div className="container mx-auto ">
        {/* <BlogForm /> */}
        <BlogFormOwn id={id} blog={blog} user={parseStringfy(user)} />
      </div>
    </div>
  );
};

export default Edit;
