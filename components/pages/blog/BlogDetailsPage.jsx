// action
import { getBlog } from "@/actions/blog";
// cmp
import Blog from "./ui/Blog";

const BlogDetailsPage = async ({ id }) => {
  try {
    const data = await getBlog(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return <Blog blog={data.blog} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default BlogDetailsPage;
