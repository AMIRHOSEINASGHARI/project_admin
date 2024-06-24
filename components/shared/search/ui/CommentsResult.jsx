// cmp
import { Clock } from "@/components/icons/Icons";
import CommentAction from "@/components/pages/shared/CommentAction";
import moment from "moment";
import CustomBadge from "../../CustomBadge";

const CommentsResult = ({ comments }) => {
  return (
    <div>
      <h1 className="text-h3 font-medium mb-2">Comments</h1>
      {comments.map((comment) => (
        <div key={comment._id} className="rounded-btn py-2 px-3 border mb-1">
          <p className="font-medium">{comment.title}</p>
          <p className="text-p3">{comment.description}</p>
          <div className="flex items-center flex-wrap gap-2 mt-4">
            <CustomBadge
              title={comment.status}
              condition={comment.status == "Answered"}
            />
            <CustomBadge
              title={comment.published ? "Published" : "Draft"}
              condition={comment.published}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 bg-lightGray border rounded-btn py-1 px-2">
              <Clock size={15} />
              <p className="text-p2">{moment(comment.createdAt).fromNow()}</p>
            </div>
            <CommentAction
              _id={comment._id}
              answer={comment.answer}
              published={comment.published}
              status={comment.status}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsResult;
