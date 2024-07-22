// react
import { Suspense } from "react";
// cmp
import Blog from "./ui/Blog";
import LoaderBar from "@/components/shared/LoaderBar";

const BlogDetailsPage = async ({ id }) => {
  return (
    <Suspense fallback={<LoaderBar />}>
      <Blog id={id} />
    </Suspense>
  );
};

export default BlogDetailsPage;
