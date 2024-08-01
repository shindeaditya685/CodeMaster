import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const NavbarForSingleBlog = ({ user }: { user: User | null }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full  flex flex-col">
      <nav className="flex flex-wrap items-center justify-between mt-4 opacity-90 hover:opacity-100">
        <Link href={"/all-blogs"} className="text-xl sm:text-2xl font-bold">
          {/* CodeMaster */}
          <Image
            src={"/assets/back.png"}
            alt="back-button"
            width={30}
            height={30}
          />
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
      <div className="border-b mt-4 opacity-70" />
    </div>
  );
};

export default NavbarForSingleBlog;
