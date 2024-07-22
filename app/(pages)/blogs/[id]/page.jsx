import BlogDetailsPage from "@/components/pages/blog/BlogDetailsPage";

const Blog = ({ params }) => {
  return <BlogDetailsPage id={params.id} />;
};

export default Blog;
