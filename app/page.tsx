import Hero from "@/components/Hero";
import { currentUser } from "@clerk/nextjs/server";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CodeMasterIcon from "@/components/SVGS/Icon";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="w-full min-h-screen bg-gray-900">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between mt-4 text-white">
        <Link href={"/"} className="text-xl sm:text-2xl font-bold text-white">
          CodeMaster
        </Link>
        <div className="flex gap-3 sm:gap-8 items-center mt-4 sm:mt-0">
          <Button asChild>
            <Link
              href={"/all-blogs"}
              className="hover:bg-gray-700 hover:text-white duration-500 ease-in-out border"
            >
              Explore Blog&apos;s
            </Link>
          </Button>
          <Button className={buttonVariants({ variant: "outline" })} asChild>
            {user ? (
              <Link
                href={"/create-blog"}
                className="hover:bg-gray-700 hover:text-white duration-500 ease-in-out"
              >
                Start a Blog
              </Link>
            ) : (
              <Link
                href={"/sign-in"}
                className="hover:bg-gray-700 hover:text-white duration-500 ease-in-out"
              >
                Sign-In
              </Link>
            )}
          </Button>
          {user && (
            <Button asChild>
              <Link
                href={"/profile"}
                className="hover:bg-gray-700 hover:text-white duration-500 ease-in-out border"
              >
                {user ? "View Profile" : ""}
              </Link>
            </Button>
          )}

          <UserButton />
        </div>
      </nav>
      <div className="border-b mt-4 opacity-70 border-gray-700" />
      <Hero />
    </main>
  );
}
