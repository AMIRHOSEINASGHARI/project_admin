"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
// hooks
import useServerAction from "@/hooks/callServerAction";
// actions
import { updateBlogStatus } from "@/actions/blog";
// cmp
import {
  DownAngle,
  Draft,
  Edit,
  EyeOpen,
  LeftAngle,
  Publish,
} from "@/components/icons/Icons";
import BackLink from "@/components/shared/BackLink";
import CustomButton from "@/components/shared/CustomButton";
import { Popover, Tooltip } from "antd";
import Loader from "@/components/shared/Loader";

const BlogActions = ({ id, isPublished }) => {
  const [openPopover, setOpenPopover] = useState(false);

  const { loading, fn } = useServerAction(updateBlogStatus, {
    id,
    action: isPublished ? "draft" : "publish",
  });

  //   Popover FUNCTION's : START   //
  const popoverContent = (
    <div className="popContainer w-[150px]">
      {loading ? (
        <div className="flex items-center justify-center w-full h-[75px]">
          <Loader width={20} height={20} />
        </div>
      ) : (
        <>
          <CustomButton
            icon={<Publish />}
            title="Published"
            classNames="popButton hoverable"
            onClick={() => fn()}
            disabled={isPublished || loading}
          />
          <CustomButton
            icon={<Draft />}
            title="Draft"
            classNames="popButton hoverable"
            onClick={() => fn()}
            disabled={!isPublished || loading}
          />
        </>
      )}
    </div>
  );
  const onOpenChange = (newOpen) => {
    setOpenPopover(newOpen);
  };

  return (
    <div className="w-full flex justify-between items-center gap-3">
      <BackLink icon={<LeftAngle size={10} />} title="Back" href="/blogs" />
      <div className="flex items-center gap-3">
        <Tooltip placement="bottom" title="Go Live">
          <Link
            href={`${process.env.NEXT_PUBLIC_LIVE_URL}/blogs/${id}`}
            target="_blank"
          >
            <CustomButton
              icon={<EyeOpen className="text-darkGray" />}
              classNames="iconButton"
            />
          </Link>
        </Tooltip>
        <Tooltip placement="bottom" title="Edit">
          <Link href={`/blogs/edit/${id}`}>
            <CustomButton
              icon={<Edit className="text-darkGray" />}
              classNames="iconButton"
            />
          </Link>
        </Tooltip>
        <Popover
          content={popoverContent}
          open={openPopover}
          onOpenChange={onOpenChange}
          trigger="click"
          placement="bottomRight"
          overlayInnerStyle={{
            padding: "0",
          }}
        >
          <CustomButton
            title={
              <div className="flex items-center gap-3">
                <p>{isPublished ? "Published" : "Draft"}</p>
                <DownAngle size={13} />
              </div>
            }
            classNames="bg-dark1 text-white py-2 px-3.5 rounded-btn"
            onClick={() => setOpenPopover(!openPopover)}
          />
        </Popover>
      </div>
    </div>
  );
};

export default BlogActions;
