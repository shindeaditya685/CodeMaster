"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Menubar from "@/components/SVGS/Menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavbarForBlogPages = ({
  user,
  handleSearch,
}: {
  user: User | null;
  handleSearch: (query: string) => void;
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
      <nav className="flex items-center justify-between mt-4">
        <Link href={"/"} className="text-xl lg:text-2xl font-bold">
          CodeMaster
        </Link>

        <div className="md:block flex-1 hidden  max-w-2xl mx-4">
          <div className="flex">
            <Input
              placeholder="search blog here...."
              className="shad-input border-0 flex-1"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Button
              type="button"
              className="shad-primary-btn h-11 rounded-l-none"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menubar />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] justify-center items-center flex flex-col bg-gray-800 text-white">
              <DropdownMenuItem>
                <UserButton />
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-gray-600" />
              <DropdownMenuItem>
                <Link href={"/create-blog"} className="w-full text-center">
                  Start a Blog
                </Link>
              </DropdownMenuItem>
              {user && (
                <DropdownMenuItem>
                  <Link href={"/profile"} className="w-full text-center">
                    View Profile
                  </Link>
                </DropdownMenuItem>
              )}
              {!user && (
                <DropdownMenuItem>
                  <Link href={"/sign-in"} className="w-full text-center">
                    Sign In
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-3 lg:gap-8 items-center">
          <Button asChild>
            <Link
              href={"/create-blog"}
              className="hover:bg-white hover:text-black duration-500 ease-in-out border"
            >
              Start a Blog
            </Link>
          </Button>
          {user && (
            <Button asChild>
              <Link
                href={"/profile"}
                className="hover:bg-white hover:text-black duration-500 ease-in-out border"
              >
                View Profile
              </Link>
            </Button>
          )}
          {!user && (
            <Button asChild>
              <Link
                href={"/sign-in"}
                className="hover:bg-white hover:text-black duration-500 ease-in-out border"
              >
                Sign In
              </Link>
            </Button>
          )}
          <UserButton />
        </div>
      </nav>
      {/* search bar */}
      <div className="flex-1 md:hidden  my-4 max-w-2xl mx-4">
        <div className="flex">
          <Input
            placeholder="search blog here...."
            className="shad-input border-0 flex-1"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Button
            type="button"
            className="shad-primary-btn h-11 rounded-l-none"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="border-b mt-4  opacity-70" />
    </div>
  );
};

export default NavbarForBlogPages;
