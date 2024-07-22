// actions
import { getBlog } from "@/actions/blog";
// cmp
import BlogActions from "./BlogActions";
import BlogContent from "./BlogContent";

const Blog = async ({ id }) => {
  const data = await getBlog(id);

  return (
    <div className="space-y-5">
      <BlogActions
        id={JSON.parse(JSON.stringify(data.blog._id))}
        isPublished={data.blog.published}
      />
      <BlogContent {...JSON.parse(JSON.stringify(data.blog))} />
    </div>
  );
};

export default Blog;
