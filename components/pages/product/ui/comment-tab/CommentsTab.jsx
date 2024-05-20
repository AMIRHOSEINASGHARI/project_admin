// react
import { Fragment } from "react";
// next
import Image from "next/image";
// constants
import { images } from "@/constants";
// cmp
import moment from "moment";
import { Empty } from "antd";
import CommentAction from "@/components/pages/shared/CommentAction";
import CustomBadge from "@/components/shared/CustomBadge";

const CommentsTab = ({ comments }) => {
  if (comments.length === 0) {
    return <Empty description="No Comments" />;
  }

  return (
    <div className="space-y-10">
      {comments?.map((comment, index) => {
        const {
          _id,
          title,
          description,
          senderId: { avatar, displayName },
          answer,
          status,
          published,
          createdAt,
        } = comment;

        return (
          <Fragment key={_id}>
            <div className="flex max-lg:flex-col gap-box">
              <div className="flex gap-box lg:flex-col lg:items-center lg:w-[20%]">
                <div className="flex justify-center">
                  <Image
                    src={avatar || images.person}
                    width={70}
                    height={70}
                    alt="user"
                    priority
                    className="max-lg:w-[60px] max-lg:h-[60px]"
                  />
                </div>
                <div>
                  <p className="text-p1 font-medium lg:text-center">
                    {displayName}
                  </p>
                  <p className="text-p2 text-darkGray lg:text-center">
                    {moment(createdAt).format("l")}
                  </p>
                </div>
              </div>
              <div className="lg:w-[80%]">
                <div className="flex gap-2 justify-between items-center mb-4 w-full">
                  <div className="flex gap-2">
                    <CustomBadge
                      condition={status === "Answered"}
                      title={status}
                    />
                    <CustomBadge
                      condition={published}
                      title={published ? "Published" : "Not-Published"}
                    />
                  </div>
                  <CommentAction
                    _id={JSON.parse(JSON.stringify(_id))}
                    answer={JSON.parse(JSON.stringify(answer))}
                    status={JSON.parse(JSON.stringify(status))}
                    published={JSON.parse(JSON.stringify(published))}
                  />
                </div>
                <h4 className="text-h4 font-bold mb-2">{title}</h4>
                <p className="text-p2">{description}</p>
              </div>
            </div>
            {index < comments.length - 1 && <hr />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default CommentsTab;
