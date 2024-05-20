// actions
import { getBlogs } from "@/actions/blog";
import BlogsList from "./ui/BlogsList";

const BlogsPage = async () => {
  try {
    const data = await getBlogs();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    if (data.blogs.length === 0) {
      return <p>No Blogs!</p>;
    }

    return <BlogsList blogs={JSON.parse(JSON.stringify(data.blogs))} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default BlogsPage;
