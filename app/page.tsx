import Hero from "@/components/Hero";
import { currentUser } from "@clerk/nextjs/server";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Menubar from "@/components/SVGS/Menubar";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="w-full h-screen bg-gray-900 overflow-hidden flex flex-col">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 text-white">
        <Link href="/" className="text-xl sm:text-2xl font-bold">
          CodeMaster
        </Link>
        <div className="flex gap-3 sm:gap-8 items-center">
          <Button asChild>
            <Link
              href="/all-blogs"
              className="hover:bg-gray-700 hover:text-white border"
            >
              Explore Blog&apos;s
            </Link>
          </Button>
          <Button className={buttonVariants({ variant: "outline" })} asChild>
            {user ? (
              <Link
                href="/create-blog"
                className="hover:bg-gray-700 hover:text-white"
              >
                Start a Blog
              </Link>
            ) : (
              <Link
                href="/sign-in"
                className="hover:bg-gray-700 hover:text-white"
              >
                Sign-In
              </Link>
            )}
          </Button>
          {user && (
            <Button asChild>
              <Link
                href="/profile"
                className="hover:bg-gray-700 hover:text-white border"
              >
                View Profile
              </Link>
            </Button>
          )}
          <UserButton />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
          CodeMaster
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menubar />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px] flex flex-col items-center bg-white text-black">
            <DropdownMenuLabel>
              <div className="rounded-full shadow-md">
                <UserButton />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/all-blogs"
                className="hover:underline underline-offset-1"
              >
                Explore Blog&apos;s
              </Link>
            </DropdownMenuItem>
            {user && (
              <DropdownMenuItem>
                <Link
                  href="/create-blog"
                  className="hover:underline underline-offset-1"
                >
                  Start a Blog
                </Link>
              </DropdownMenuItem>
            )}
            {user && (
              <DropdownMenuItem>
                <Link
                  href="/profile"
                  className="hover:underline underline-offset-1"
                >
                  View Profile
                </Link>
              </DropdownMenuItem>
            )}
            {!user && (
              <DropdownMenuItem>
                <Link
                  href="/sign-in"
                  className="hover:underline underline-offset-1"
                >
                  Sign-in
                </Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center">
        <Hero />
      </div>
    </main>
  );
}
