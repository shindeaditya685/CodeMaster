"use client";

import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../CodeSpinppet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import { copyToClipboard } from "@/lib/supportFunctions";
import Image from "next/image";
import ReactTimeAgo from "../Time-Ago/ReactTimeAgo";

const SingleBlog = ({ blog, user }: { blog: BlogType; user?: User | null }) => {
  const [activeTab, setActiveTab] = useState("javaCode");
  const [openShare, setOpenShare] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.origin + pathname);
    }
  }, [pathname]);

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg mb-6" style={{ whiteSpace: "pre-wrap" }}>
        {blog.description}
      </p>
      <div className="flex flex-wrap mb-6">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-700 text-blue-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 my-4">
        <div className="flex gap-3 items-center flex-1">
          <div>
            <Image
              src={blog?.imageUrl}
              alt="user-image"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <p>
            Created by {blog?.userFirstName} {blog?.userLastName}{" "}
          </p>
        </div>
        <p className="text-sm text-gray-500">
          <ReactTimeAgo createdAt={blog.createdAt.toString()} />
        </p>
      </div>
      <Tabs
        className="w-full"
        defaultValue="javaCode"
        onValueChange={setActiveTab}
      >
        <TabsList className="flex space-x-4 mb-4">
          {blog.javaCode && (
            <TabsTrigger
              value="javaCode"
              className={`py-2 px-4 rounded-lg text-sm font-semibold ${
                activeTab === "javaCode"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              Java
            </TabsTrigger>
          )}
          {blog.cppCode && (
            <TabsTrigger
              value="cppCode"
              className={`py-2 px-4 rounded-lg text-sm font-semibold ${
                activeTab === "cppCode"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              C++
            </TabsTrigger>
          )}
          {blog.jsCode && (
            <TabsTrigger
              value="jsCode"
              className={`py-2 px-4 rounded-lg text-sm font-semibold ${
                activeTab === "jsCode"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              JavaScript
            </TabsTrigger>
          )}
          {blog.pythonCode && (
            <TabsTrigger
              value="pythonCode"
              className={`py-2 px-4 rounded-lg text-sm font-semibold ${
                activeTab === "pythonCode"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              Python
            </TabsTrigger>
          )}
        </TabsList>
        {blog.javaCode && (
          <TabsContent value="javaCode">
            <CodeSnippet code={blog.javaCode} language="java" />
          </TabsContent>
        )}
        {blog.cppCode && (
          <TabsContent value="cppCode">
            <CodeSnippet code={blog.cppCode} language="cpp" />
          </TabsContent>
        )}
        {blog.jsCode && (
          <TabsContent value="jsCode">
            <CodeSnippet code={blog.jsCode} language="javascript" />
          </TabsContent>
        )}
        {blog.pythonCode && (
          <TabsContent value="pythonCode">
            <CodeSnippet code={blog.pythonCode} language="python" />
          </TabsContent>
        )}
      </Tabs>
      <div className="my-6 flex gap-3">
        <Button className="border border-opacity-50 border-blue-300 bg-blue-700 text-blue-200 text-sm font-semibold rounded">
          {blog.likes} likes
        </Button>
        <Dialog open={openShare} onOpenChange={setOpenShare}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setOpenShare(true)}
              className="border border-opacity-50 border-blue-300 bg-blue-700 text-blue-200 text-sm font-semibold rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-gray-700">
            <div className="flex mt-4">
              <div className="w-[90%]">
                <Input value={currentUrl} className="shad-input" />
              </div>
              <div>
                <Button
                  onClick={() => copyToClipboard(currentUrl, setIsCopied)}
                >
                  {isCopied ? (
                    <div className="flex gap-2 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <p className="text-sm">Copied!</p>
                    </div>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.855.739 2.072 1.739M14.25 10.5v-6a2.25 2.25 0 1 0-4.5 0v6m-3 12h6A2.25 2.25 0 0 0 15 20.25v-6A2.25 2.25 0 0 0 12.75 12h-6A2.25 2.25 0 0 0 4.5 14.25v6A2.25 2.25 0 0 0 6.75 22.5Z"
                      />
                    </svg>
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SingleBlog;
