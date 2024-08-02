import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import Menubar from "@/components/SVGS/Menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavbarForSingleBlog = ({ user }: { user: User | null }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
      <nav className="flex items-center justify-between mt-4 opacity-90 hover:opacity-100">
        <Link href="/all-blogs" className="text-xl sm:text-2xl font-bold">
          <Image
            src="/assets/back.png"
            alt="back-button"
            width={30}
            height={30}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-3 sm:gap-8 items-center">
          <Button asChild>
            <Link
              href="/create-blog"
              className="hover:bg-white hover:text-black duration-500 ease-in-out border"
            >
              Start a Blog
            </Link>
          </Button>
          {user && (
            <Button asChild>
              <Link
                href="/profile"
                className="hover:bg-white hover:text-black duration-500 ease-in-out border"
              >
                View Profile
              </Link>
            </Button>
          )}
          {!user && (
            <Button asChild>
              <Link
                href="/sign-in"
                className="hover:bg-white hover:text-black duration-500 ease-in-out border"
              >
                Sign In
              </Link>
            </Button>
          )}
          <UserButton />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Menubar />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] flex items-center justify-center flex-col bg-gray-800 text-white">
              <DropdownMenuSeparator className="border-gray-600" />
              <DropdownMenuItem>
                <UserButton />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/create-blog" className="w-full text-center">
                  Start a Blog
                </Link>
              </DropdownMenuItem>
              {user && (
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full text-center">
                    View Profile
                  </Link>
                </DropdownMenuItem>
              )}
              {!user && (
                <DropdownMenuItem>
                  <Link href="/sign-in" className="w-full text-center">
                    Sign In
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="border-b mt-4 opacity-70" />
    </div>
  );
};

export default NavbarForSingleBlog;
