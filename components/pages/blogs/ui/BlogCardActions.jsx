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
  Draft,
  Edit,
  EyeOpen,
  MenuDots,
  Publish,
  Trash,
} from "@/components/icons/Icons";
import { Popover } from "antd";
import CustomButton from "@/components/shared/CustomButton";
import Loader from "@/components/shared/Loader";

const BlogCardActions = ({ blogId, published }) => {
  const [open, setOpen] = useState(false);

  const { loading, fn: updateBlog } = useServerAction(
    updateBlogStatus,
    {
      id: blogId,
      action: published ? "draft" : "publish",
    },
    () => setOpen(false)
  );

  const popoverContent = (
    <div className="popContainer w-[150px]">
      {loading ? (
        <div className="h-[185px] flex items-center justify-center">
          <Loader width={20} height={20} />
        </div>
      ) : (
        <>
          <div>
            <Link href={`/blogs/${blogId}`} className="popButton hoverable">
              <EyeOpen />
              <span>View</span>
            </Link>
            <Link
              href={`/blogs/edit/${blogId}`}
              className="popButton hoverable"
            >
              <Edit />
              <span>Edit</span>
            </Link>
          </div>
          <hr />
          <div>
            <CustomButton
              icon={<Publish />}
              title="Publish"
              classNames={`popButton ${
                published ? "text-darkGreen bg-lightGreen" : "hoverable"
              }`}
              onClick={() => updateBlog()}
              disabled={loading || published}
            />
            <CustomButton
              icon={<Draft />}
              title="Draft"
              classNames={`popButton ${
                !published ? "text-darkGray bg-lightGray" : "hoverable"
              }`}
              onClick={() => updateBlog()}
              disabled={loading || !published}
            />
          </div>
          <hr />
          <CustomButton
            icon={<Trash />}
            title="Delete"
            classNames="popButton bg-lightRose text-darkRose"
          />
        </>
      )}
    </div>
  );

  const onOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      content={popoverContent}
      placement="rightTop"
      trigger="click"
      overlayInnerStyle={{
        padding: "0px",
        margin: "0px",
      }}
    >
      <CustomButton
        icon={<MenuDots size={15} />}
        classNames="iconButton"
        onClick={() => setOpen(!open)}
      />
    </Popover>
  );
};

export default BlogCardActions;
