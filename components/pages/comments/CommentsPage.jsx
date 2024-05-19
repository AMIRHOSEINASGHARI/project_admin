// actions
import { getComments } from "@/actions/comment";
// cmp
import { Empty } from "antd";
import CommentsList from "./ui/CommentsList";

const CommentsPage = async () => {
  try {
    const data = await getComments();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    if (data.products?.length === 0) {
      return (
        <div className="box border">
          <Empty description="No Comments!" />
        </div>
      );
    }

    return <CommentsList comments={data.comments} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CommentsPage;
