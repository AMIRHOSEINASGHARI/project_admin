import BlogActions from "./BlogActions";

const Blog = ({ blog }) => {
  return (
    <div>
      <BlogActions
        id={JSON.parse(JSON.stringify(blog._id))}
        isPublished={JSON.parse(JSON.stringify(blog.published))}
      />
    </div>
  );
};

export default Blog;
