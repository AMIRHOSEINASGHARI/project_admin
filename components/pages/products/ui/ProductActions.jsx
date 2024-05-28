"use client";

// next
import Link from "next/link";
// cmp
import { Edit, EyeOpen } from "@/components/icons/Icons";
import { Tooltip } from "antd";

const ProductActions = ({ productId }) => {
  return (
    <div className="flex gap-2">
      <Tooltip title="Details">
        <Link href={`/products/${productId}`} className="iconButton">
          <EyeOpen />
        </Link>
      </Tooltip>
      <Tooltip title="Edit">
        <Link href={`/products/edit/${productId}`} className="iconButton">
          <Edit />
        </Link>
      </Tooltip>
    </div>
  );
};

export default ProductActions;
