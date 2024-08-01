"use client";

import React from "react";
import { Button } from "../ui/button";
import Delete from "../SVGS/Delete";
import { deleteBlogByIdAction } from "@/actions/blogPostAction";
import { toast } from "react-toastify";

const DeleteBlogButton = ({ blogId }: { blogId: string }) => {
  const handleDeleteBlog = async (blogId: string, path: string) => {
    const updatedBlogs = await deleteBlogByIdAction(blogId, path);
    toast.success("Blog deleted successfully!");
    return updatedBlogs;
  };

  return (
    <Button onClick={() => handleDeleteBlog(blogId, "/profile")}>
      <Delete />
    </Button>
  );
};

export default DeleteBlogButton;
