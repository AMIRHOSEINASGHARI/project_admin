"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
// cmp
import {
  Draft,
  Edit,
  EyeOpen,
  MenuDots,
  Publish,
} from "@/components/icons/Icons";
import { Popover } from "antd";
import CustomButton from "@/components/shared/CustomButton";

const ProductActions = ({ productId, published }) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const content = (
    <div className="popContainer min-w-[150px]">
      <CustomButton
        disabled={published}
        title="Publish"
        icon={<Publish />}
        classNames={`popButton ${
          published ? "text-darkGreen bg-lightGreen" : "hoverable"
        }`}
      />
      <CustomButton
        disabled={!published}
        title="Draft"
        icon={<Draft />}
        classNames={`popButton ${
          !published ? "text-darkOrange bg-lightOrange" : "hoverable"
        }`}
      />
      <hr />
      <Link href={`/products/${productId}`} className="popButton hoverable">
        <EyeOpen />
        Details
      </Link>
      <Link
        href={`/products/edit/${productId}`}
        className="popButton hoverable"
      >
        <Edit />
        Edit
      </Link>
    </div>
  );

  return (
    <div className="flex gap-2">
      <Popover
        open={open}
        onOpenChange={onOpenChange}
        trigger="click"
        placement="leftTop"
        content={content}
        overlayInnerStyle={{
          padding: "0",
        }}
      >
        <CustomButton icon={<MenuDots />} classNames="iconButton" />
      </Popover>
    </div>
  );
};

export default ProductActions;
