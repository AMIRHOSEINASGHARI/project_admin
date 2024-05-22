// actions
import { getBlogs } from "@/actions/blog";
// constants
import { blogsPageBread } from "@/constants/breadcrumpItems";
// cmp
import BlogsList from "./ui/BlogsList";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const BlogsPage = async () => {
  try {
    const data = await getBlogs();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <>
        <PageHeading title="Blogs" />
        <CustomBreadcrumb items={blogsPageBread} />
        {data.blogs.length === 0 ? (
          <p>No Blogs!</p>
        ) : (
          <BlogsList blogs={JSON.parse(JSON.stringify(data.blogs))} />
        )}
      </>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default BlogsPage;
