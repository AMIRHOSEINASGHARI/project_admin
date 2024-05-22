// actions
import { getComments } from "@/actions/comment";
// constants
import { commentsPageBread } from "@/constants/breadcrumpItems";
// cmp
import { Empty } from "antd";
import CommentsList from "./ui/CommentsList";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const CommentsPage = async () => {
  try {
    const data = await getComments();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <>
        <PageHeading title="Comments" />
        <CustomBreadcrumb items={commentsPageBread} />
        {data.products?.length === 0 ? (
          <div className="box border">
            <Empty description="No Comments!" />
          </div>
        ) : (
          <CommentsList comments={JSON.parse(JSON.stringify(data.comments))} />
        )}
      </>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CommentsPage;
