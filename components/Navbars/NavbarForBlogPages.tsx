import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const NavbarForBlogPages = ({ user }: { user: User | null }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full  flex flex-col">
      <nav className="flex flex-wrap items-center justify-between mt-4 opacity-90 hover:opacity-100">
        <Link href={"/"} className="text-xl sm:text-2xl font-bold">
          CodeMaster
        </Link>
        <div className="flex gap-3 sm:gap-8 items-center mt-4 sm:mt-0">
          <Button asChild>
            <Link
              href={"/create-blog"}
              className="hover:bg-white hover:text-black duration-500 ease-in-out border"
            >
              Start a Blog
            </Link>
          </Button>
          {!user ? (
            <Button asChild>
              <Link
                href={"/profile"}
                className="hover:bg-white hover:text-black duration-500 ease-in-out border"
              >
                View Profile
              </Link>
            </Button>
          ) : (
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
      <div className="border-b mt-4 opacity-70" />
    </div>
  );
};

export default NavbarForBlogPages;
