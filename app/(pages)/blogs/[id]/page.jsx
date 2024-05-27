import BlogDetailsPage from "@/components/pages/blog/BlogDetailsPage";

export const dynamic = "force-dynamic";

const Blog = ({ params }) => {
  return <BlogDetailsPage id={params.id} />;
};

export default Blog;
