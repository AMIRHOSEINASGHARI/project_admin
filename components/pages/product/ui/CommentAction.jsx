"use client";

// hooks
import useServerAction from "@/hooks/callServerAction";
// actions
import { publishCommentStatus } from "@/actions/comment";
// cmp
import { Document, Edit, EyeOpen, MenuDots } from "@/components/icons/Icons";
import CustomButton from "@/components/shared/CustomButton";
import Loader from "@/components/shared/Loader";
import { Popover } from "antd";

const CommentAction = ({ _id, answer, status, published }) => {
  const { loading: publishLoading, fn: publish } = useServerAction(
    publishCommentStatus,
    {
      _id,
      action: "publish",
    }
  );

  const { loading: draftLoading, fn: draft } = useServerAction(
    publishCommentStatus,
    {
      _id,
      action: "draft",
    }
  );

  const content = (
    <div className="p-2 flex flex-col gap-1 w-[150px]">
      <CustomButton
        onClick={() => publish()}
        disabled={published || publishLoading}
        classNames="flex justify-center w-full"
        title={
          publishLoading ? (
            <Loader width={15} height={15} />
          ) : (
            <div
              className={`flex w-full items-center hoverable p-btn gap-btn rounded-btn ${
                published && "bg-gray-200"
              }`}
            >
              <EyeOpen />
              <p>Published</p>
            </div>
          )
        }
      />
      <CustomButton
        onClick={() => draft()}
        disabled={!published || draftLoading}
        classNames="flex justify-center w-full"
        title={
          draftLoading ? (
            <Loader width={15} height={15} />
          ) : (
            <div
              className={`flex w-full items-center hoverable p-btn gap-btn rounded-btn ${
                !published && "bg-gray-200"
              }`}
            >
              <Document />
              <p>Draft</p>
            </div>
          )
        }
      />
    </div>
  );

  return (
    <div className="flex items-center gap-1">
      <CustomButton
        title={<Edit size={18} />}
        classNames="hoverable p-2 rounded-btn"
      />
      <Popover
        overlayInnerStyle={{
          padding: "0",
        }}
        content={content}
        trigger="click"
        placement="leftTop"
      >
        <CustomButton
          type="button"
          icon={<MenuDots size={18} />}
          classNames="hoverable p-2 rounded-btn"
        />
      </Popover>
    </div>
  );
};

export default CommentAction;
