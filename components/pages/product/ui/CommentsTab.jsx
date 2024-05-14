// react
import { Fragment } from "react";
// next
import Image from "next/image";
// constants
import { images } from "@/constants";
// cmp
import moment from "moment";
import CommentAction from "./CommentAction";
import { Empty } from "antd";

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
                    <p
                      className={`py-1 px-2 text-p3 rounded-btn w-fit h-fit ${
                        status === "Not-Answered"
                          ? "bg-lightOrange text-darkOrange"
                          : "bg-lightGreen text-darkGreen"
                      }`}
                    >
                      {status}
                    </p>
                    <p
                      className={`py-1 px-2 text-p3 rounded-btn w-fit h-fit ${
                        published
                          ? "bg-lightGreen text-darkGreen"
                          : "bg-lightOrange text-darkOrange"
                      }`}
                    >
                      {published ? "Published" : "Not-Published"}
                    </p>
                  </div>
                  <CommentAction
                    id={_id}
                    answer={answer}
                    status={status}
                    published={published}
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
