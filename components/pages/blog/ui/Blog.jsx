import BlogActions from "./BlogActions";
import BlogContent from "./BlogContent";

const Blog = ({ blog }) => {
  return (
    <div className="space-y-5">
      <BlogActions
        id={JSON.parse(JSON.stringify(blog._id))}
        isPublished={blog.published}
      />
      <BlogContent {...JSON.parse(JSON.stringify(blog))} />
    </div>
  );
};

export default Blog;
