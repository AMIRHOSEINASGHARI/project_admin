// react
import { Suspense } from "react";
// next
import Link from "next/link";
// constants
import { blogsPageBread } from "@/constants/breadcrumpItems";
// cmp
import BlogsList from "./ui/BlogsList";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import LoaderBar from "@/components/shared/LoaderBar";
import { LayerPlus } from "@/components/icons/Icons";

const BlogsPage = () => {
  return (
    <>
      <PageHeading title="Blogs" />
      <CustomBreadcrumb items={blogsPageBread} />
      <div className="flex w-full justify-end mb-3">
        <Link
          href="/add-blog"
          className="flex items-center gap-2 bg-dark1 text-white p-btn rounded-btn"
        >
          <LayerPlus />
          <span>New Blog</span>
        </Link>
      </div>
      <Suspense fallback={<LoaderBar />}>
        <BlogsList />
      </Suspense>
    </>
  );
};

export default BlogsPage;
