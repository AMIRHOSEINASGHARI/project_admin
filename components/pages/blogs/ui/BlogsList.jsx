// actions
import { getBlogs } from "@/actions/blog";
// cmp
import BlogCard from "./BlogCard";

const BlogsList = async () => {
  const data = await getBlogs();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {data.blogs.map((blog) => (
        <BlogCard key={blog._id} {...blog} />
      ))}
    </div>
  );
};

export default BlogsList;
