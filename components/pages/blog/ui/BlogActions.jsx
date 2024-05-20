"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
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

const BlogActions = ({ id, isPublished }) => {
  const [openPopover, setOpenPopover] = useState(false);

  //   Popover FUNCTION's : START   //
  const popoverContent = (
    <div className="popContainer w-[150px]">
      <CustomButton
        icon={<Publish />}
        title="Published"
        classNames="popButton hoverable"
      />
      <CustomButton
        icon={<Draft />}
        title="Draft"
        classNames="popButton hoverable"
      />
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
            href={`https://store-onlineshop.liara.run/blogs/${id}`}
            target="_blank"
          >
            <CustomButton
              icon={<EyeOpen className="text-darkGray" />}
              classNames="iconButton"
            />
          </Link>
        </Tooltip>
        <Tooltip placement="bottom" title="Edit">
          <Link href={`/blogs/${id}/edit`}>
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
