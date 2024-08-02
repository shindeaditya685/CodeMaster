import { BlogFormOwn } from "@/components/Blog-Form/BlogFormOwn";
import { Button } from "@/components/ui/button";
import { parseStringfy } from "@/lib/supportFunctions";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import Menubar from "@/components/SVGS/Menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CreateBlog = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        <nav className="flex items-center justify-between mt-4 opacity-90 hover:opacity-100">
          <Link href={"/"} className="text-xl sm:text-2xl font-bold">
            CodeMaster
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-3 sm:gap-8 items-center">
            <Button asChild>
              <Link
                href={"/all-blogs"}
                className="hover:bg-white hover:text-black duration-500 ease-in-out border"
              >
                Explore Blog&apos;s
              </Link>
            </Button>
            <Button asChild>
              <Link
                href={"/profile"}
                className="hover:bg-white hover:text-black duration-500 ease-in-out border"
              >
                View Profile
              </Link>
            </Button>
            <UserButton />
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menubar />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] justify-center items-center flex flex-col bg-gray-800 text-white">
                <DropdownMenuSeparator className="border-gray-600" />
                <DropdownMenuItem>
                  <UserButton />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/all-blogs"} className="w-full text-center">
                    Explore Blog&apos;s
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/profile"} className="w-full text-center">
                    View Profile
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        <div className="border-b mt-4 opacity-70" />
      </div>
      <div className="container mx-auto w-[70%]">
        <BlogFormOwn user={parseStringfy(user)} />
      </div>
    </div>
  );
};

export default CreateBlog;
