"use client";

import { parseStringfy } from "@/lib/supportFunctions";
import React, { useState } from "react";
import BlogsShow from "../BlogsShow";
import NavbarForBlogPages from "../Navbars/NavbarForBlogPages";

const AllBlogsPage = ({
  user,
  sortedBlogs,
}: {
  user: User | null;
  sortedBlogs: BlogType[];
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(sortedBlogs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredBlogs(sortedBlogs);
    } else {
      const filtered = sortedBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query.toLowerCase()) ||
          blog.description.toLowerCase().includes(query.toLowerCase()) ||
          blog.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          )
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <>
      <NavbarForBlogPages user={user} handleSearch={handleSearch} />
      <section className="py-8 bg-gray-900 min-h-screen">
        {filteredBlogs && filteredBlogs.length > 0 ? (
          <BlogsShow
            blogs={parseStringfy(filteredBlogs)}
            blogHeading="Navigate Through Coding Knowledge 🧭"
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

export default AllBlogsPage;
