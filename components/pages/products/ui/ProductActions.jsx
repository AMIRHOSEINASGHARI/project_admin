"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
// hooks
import useServerAction from "@/hooks/callServerAction";
// actions
import { changeProductStatus } from "@/actions/product";
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
import Loader from "@/components/shared/Loader";

const ProductActions = ({ productId, published }) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const { loading, fn } = useServerAction(
    changeProductStatus,
    { id: productId, published },
    () => onOpenChange()
  );

  const content = loading ? (
    <div className="w-[150px] h-[160px] flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className="popContainer min-w-[150px]">
      <CustomButton
        disabled={published || loading}
        title="Publish"
        icon={<Publish />}
        classNames={`popButton ${
          published ? "text-darkGreen bg-lightGreen" : "hoverable"
        }`}
        onClick={fn}
      />
      <CustomButton
        disabled={!published || loading}
        title="Draft"
        icon={<Draft />}
        classNames={`popButton ${
          !published ? "text-darkOrange bg-lightOrange" : "hoverable"
        }`}
        onClick={fn}
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
