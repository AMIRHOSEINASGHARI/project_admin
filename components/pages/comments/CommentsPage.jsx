// react
import { Suspense } from "react";
// constants
import { commentsPageBread } from "@/constants/breadcrumpItems";
// cmp
import CommentsList from "./ui/CommentsList";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import LoaderBar from "@/components/shared/LoaderBar";

const CommentsPage = () => {
  return (
    <>
      <PageHeading title="Comments" />
      <CustomBreadcrumb items={commentsPageBread} />
      <Suspense fallback={<LoaderBar />}>
        <CommentsList />
      </Suspense>
    </>
  );
};

export default CommentsPage;
