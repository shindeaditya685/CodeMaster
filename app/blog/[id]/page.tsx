import NavbarForBlogPages from "@/components/Navbars/NavbarForBlogPages";
import SingleBlog from "@/components/BlogPage/SingleBlog";
import { currentUser } from "@clerk/nextjs/server";
import { fetchByBlogIdAction } from "@/actions/blogPostAction";
import { parseStringfy } from "@/lib/supportFunctions";

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage = async ({ params: { id } }: BlogPageProps) => {
  const fetchedBlog = await fetchByBlogIdAction(id, `/blog/${id}`);
  const user = await currentUser();
  const blog = parseStringfy(fetchedBlog);

  if (!blog) {
    return (
      <div className="container mx-auto p-6 bg-gray-900 text-white">
        Blog not found.
      </div>
    );
  }

  return (
    <>
      <NavbarForBlogPages />
      <SingleBlog blog={blog} user={JSON.parse(JSON.stringify(user))} />
    </>
  );
};

export default BlogPage;
