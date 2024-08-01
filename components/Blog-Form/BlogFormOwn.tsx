"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/validation";
import SubmitButton from "../SubmitButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Editor from "@monaco-editor/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { editBlogByIdAction, saveBlogAction } from "@/actions/blogPostAction";
import Cross from "../SVGS/Cross";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function BlogFormOwn({
  id,
  user,
  blog,
}: {
  id?: string;
  user: User | null;
  blog: BlogType;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [addTags, setAddTags] = useState<string[]>(blog?.tags || []);
  const [tagInput, setTagInput] = useState("");
  const [activeLanguage, setActiveLanguage] = useState<string>("Java");
  const router = useRouter();

  const handleTabClick = (language: string) => {
    setActiveLanguage(language);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      setAddTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blog?.title,
      description: blog?.description,
      tags: blog?.tags || [],
      javaCode: blog?.javaCode || " ",
      cppCode: blog?.cppCode,
      jsCode: blog?.jsCode,
      pythonCode: blog?.pythonCode,
    },
  });

  async function saveBlog(formData: BlogType, path: string) {
    try {
      await saveBlogAction(formData, path);
      toast.success("Blog saved successfully!");
      router.push(path);
    } catch (error) {
      toast.error("Failed to save blog.");
      console.error("Error saving blog:", error);
    }
  }

  async function editById(blogId: string, formData: BlogType, path: string) {
    try {
      await editBlogByIdAction(blogId, formData, path);
      toast.success("Blog edited successfully!");
      router.push(path);
    } catch (error) {
      toast.error("Failed to edit blog.");
      console.error("Error editing blog:", error);
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (isLoading) return;
    setIsLoading(true);

    const blogData = {
      ...values,
      tags: addTags,
      userId: user?.id,
      imageUrl: user?.imageUrl,
      userFirstName: user?.firstName,
      userLastName: user?.lastName,
    };

    if (id) {
      editById(id, blogData, "/profile");
    } else {
      saveBlog(blogData, "/profile");
    }

    setIsLoading(false);
    form.reset({
      title: "",
      description: "",
      tags: [],
      javaCode: "",
      cppCode: "",
      jsCode: "",
      pythonCode: "",
    });
    setAddTags([]);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 font-sans"
      >
        <section className="mb-12 pt-6">
          <h1 className="header">Building Your Dev Diary! 📚</h1>
        </section>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Title</FormLabel>
              <FormControl>
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                  <Input
                    placeholder="Maximum sum of subarray."
                    {...field}
                    className="shad-input border-0"
                  />
                </div>
              </FormControl>
              <FormMessage className="shad-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Description</FormLabel>
              <FormControl>
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                  <Textarea
                    placeholder="This article delves into the concept of finding the maximum sum of a contiguous subarray within a one-dimensional numerical array. "
                    {...field}
                    className="shad-textArea border-0"
                    style={{ whiteSpace: "pre-wrap" }}
                  />
                </div>
              </FormControl>
              <FormMessage className="shad-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <div className="flex my-4">
                <div className="text-sm inline-flex flex-wrap items-center gap-2">
                  {addTags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center px-1 bg-blue-700 text-blue-200 flex-shrink-0 font-semibold rounded"
                    >
                      <span>{tag}</span>
                      <Button
                        className="px-0 pt-3"
                        onClick={() =>
                          setAddTags((prevTags) =>
                            prevTags.filter((t) => t !== tag)
                          )
                        }
                      >
                        <Cross />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                  <Input
                    placeholder="#dsa #recursion #java #javascript"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.currentTarget.value)}
                    className="shad-input border-0"
                  />
                  <Button
                    type="button"
                    onClick={handleAddTag}
                    className="border-l rounded-none h-11 bg-blue-700 text-white"
                  >
                    Add Tag
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="shad-error" />
            </FormItem>
          )}
        />
        <div>
          <Tabs defaultValue="Java" className="w-full">
            <TabsList className="flex space-x-4 mb-4">
              {["Java", "C++", "JavaScript", "Python"].map((language) => (
                <TabsTrigger
                  key={language}
                  value={language}
                  className={`py-2 px-4 rounded-lg text-sm font-semibold ${
                    activeLanguage === language
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                  onClick={() => handleTabClick(language)}
                >
                  {language}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="Java">
              <FormField
                control={form.control}
                name="javaCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Editor
                        language="java"
                        defaultValue={field.value}
                        onChange={(value) => field.onChange(value || "")}
                        options={{
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          minimap: { enabled: false },
                        }}
                        theme="vs-dark"
                        className="w-full h-64 border border-dark-500 rounded-lg"
                      />
                    </FormControl>
                    <FormMessage className="shad-error" />
                  </FormItem>
                )}
              />
            </TabsContent>
            <TabsContent value="C++">
              <FormField
                control={form.control}
                name="cppCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Editor
                        language="cpp"
                        defaultValue={field.value}
                        onChange={(value) => field.onChange(value || "")}
                        options={{
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          minimap: { enabled: false },
                        }}
                        theme="vs-dark"
                        className="w-full h-64 border border-dark-500 rounded-lg"
                      />
                    </FormControl>
                    <FormMessage className="shad-error" />
                  </FormItem>
                )}
              />
            </TabsContent>
            <TabsContent value="JavaScript">
              <FormField
                control={form.control}
                name="jsCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Editor
                        language="javascript"
                        defaultValue={field.value}
                        onChange={(value) => field.onChange(value || "")}
                        options={{
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          minimap: { enabled: false },
                        }}
                        theme="vs-dark"
                        className="w-full h-64 border border-dark-500 rounded-lg"
                      />
                    </FormControl>
                    <FormMessage className="shad-error" />
                  </FormItem>
                )}
              />
            </TabsContent>
            <TabsContent value="Python">
              <FormField
                control={form.control}
                name="pythonCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Editor
                        language="python"
                        defaultValue={field.value}
                        onChange={(value) => field.onChange(value || "")}
                        options={{
                          fontSize: 14,
                          wordWrap: "on",
                          lineNumbers: "on",
                          minimap: { enabled: false },
                        }}
                        theme="vs-dark"
                        className="w-full h-64 border border-dark-500 rounded-lg"
                      />
                    </FormControl>
                    <FormMessage className="shad-error" />
                  </FormItem>
                )}
              />
            </TabsContent>
          </Tabs>
        </div>
        <SubmitButton isLoading={isLoading} />
      </form>
    </Form>
  );
}
