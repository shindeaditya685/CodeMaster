"use server";

import ConnectToDB from "@/database/db/index.db";
import BlogPostModel from "@/database/models/blog.model";
import { parseStringfy } from "@/lib/supportFunctions";
import { revalidatePath, revalidateTag } from "next/cache";

export const saveBlogAction = async (
  formData: BlogType,
  pathToRevalidate: string
) => {
  try {
    await ConnectToDB();
    const Blog = await BlogPostModel.create(formData);
    revalidatePath(pathToRevalidate);
    return parseStringfy(Blog);
  } catch (error) {
    console.log("Error occured while saving blog.", error);
  }
};

export const editBlogByIdAction = async (
  blogId: string,
  formData: BlogType,
  pathToRevalidate: string
) => {
  try {
    await ConnectToDB();
    const updatedBlog = await BlogPostModel.findByIdAndUpdate(blogId, formData);
    return parseStringfy(updatedBlog);
  } catch (error) {
    console.log("Error occured while editing by id");
  }
};

export const deleteBlogByIdAction = async (
  blogId: string,
  pathToRevalidate: string
) => {
  try {
    await ConnectToDB();
    const updatedBlogs = await BlogPostModel.findByIdAndDelete({ _id: blogId });
    revalidatePath(pathToRevalidate);
    return parseStringfy(updatedBlogs);
  } catch (error) {
    console.log("Error orrcured while deleting by blogId", error);
  }
};

export const fetchAllBlogsAction = async (pathToRevalidate: string) => {
  try {
    await ConnectToDB();
    const Blogs = await BlogPostModel.find({});
    revalidatePath(pathToRevalidate);
    return parseStringfy(Blogs);
  } catch (error) {
    console.log("Error occured while fetching all blogs.", error);
  }
};

export const fetchByBlogIdAction = async (
  id: string,
  pathToRevalidate: string
) => {
  try {
    await ConnectToDB();
    const blog = await BlogPostModel.findById({ _id: id });
    revalidatePath(pathToRevalidate);
    return parseStringfy(blog);
  } catch (error) {
    console.log("Error occured while by Blog Id.", error);
  }
};

export const fetchBlogsByUserIdAction = async (
  userId: string,
  pathToValidate: string
) => {
  try {
    await ConnectToDB();
    // Await the query to get the actual data
    const blogs = await BlogPostModel.find({ userId: userId }).exec();
    revalidatePath(pathToValidate);
    return blogs; // Return data directly if parseStringfy is not necessary
  } catch (error) {
    console.log("Error occurred while fetching data by userId", error);
    return []; // Return an empty array on error
  }
};
