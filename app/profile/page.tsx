import NavbarForProfile from "@/components/Navbars/NavbarForProfile";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { parseStringfy, truncateText } from "@/lib/supportFunctions";
import Delete from "@/components/SVGS/Delete";
import Edit from "@/components/SVGS/Edit";
import {
  fetchBlogsByUserIdAction,
} from "@/actions/blogPostAction";
import DeleteBlogButton from "@/components/Delete-Blog/DeleteBlogButton";

const Profile = async () => {
  const user = await currentUser();

  const fetchedBlogsByUserId = await fetchBlogsByUserIdAction(
    user?.id,
    "/edit"
  );
  const blogs = parseStringfy(fetchedBlogsByUserId);

  if (!user) {
    return redirect("/sign-in");
  }

  

  return (
    <>
      <NavbarForProfile />
      <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-gray-300 h-24 w-24 flex items-center justify-center">
              <span className="text-gray-600">
                <Image
                  src={user.imageUrl}
                  alt="user-image"
                  width={1024}
                  height={1024}
                  className="w-full rounded-full"
                />
              </span>
            </div>
          </div>
          <div className="flex space-x-4 mb-6">
            <Input
              type="text"
              className="shad-input text-white border-white"
              value={user.firstName || "John"}
              readOnly
            />
            <Input
              type="text"
              className="shad-input text-white border-white"
              value={user.lastName || "Doe"}
              readOnly
            />
          </div>
          <div className="flex space-x-4 mb-6">
            <Input
              type="tel"
              className="shad-input text-white border-white"
              value={user.phoneNumbers[0] || "1234567890"}
              readOnly
            />
            <Input
              type="email"
              className="shad-input text-white border-white"
              value={user.emailAddresses[0].emailAddress}
              readOnly
            />
          </div>
          <Textarea
            className="shad-textArea"
            value={"St.Lucia, Road 15"}
            readOnly
          />

          <div className="mt-8">
            <h1 className="mb-4 text-center text-3xl font-bold text-white">
              Your blog&apos;s.
            </h1>
            <div className=" border-gray-700">
              <Table className="min-w-full divide-y divide-gray-700">
                <TableHeader className="bg-gray-700">
                  <TableRow>
                    <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Id
                    </TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Title
                    </TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Description
                    </TableHead>

                    <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Edit
                    </TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Delete
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-gray-800 divide-y divide-gray-700">
                  {blogs &&
                    blogs.length > 0 &&
                    blogs.map((blog) => (
                      <TableRow key={blog._id} className="border-0">
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {blog._id}
                        </TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {truncateText(blog.title, 30)}
                        </TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {truncateText(blog.description, 50)}
                        </TableCell>

                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link href={`/edit/${blog._id}`}>
                            <Edit />
                          </Link>
                        </TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <DeleteBlogButton
                            blogId={blog._id}
                            
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
