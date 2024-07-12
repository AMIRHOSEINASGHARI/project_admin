// next
import Link from "next/link";
// cmp
import BlogCard from "./BlogCard";
import { LayerPlus } from "@/components/icons/Icons";

const BlogsList = ({ blogs }) => {
  return (
    <div>
      <div className="flex w-full justify-end mb-3">
        <Link
          href="/add-blog"
          className="flex items-center gap-2 bg-dark1 text-white p-btn rounded-btn"
        >
          <LayerPlus />
          <span>New Blog</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
