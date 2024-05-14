// next
import Link from "next/link";
// components
import { Edit, EyeOpen, LeftAngle } from "@/components/icons/Icons";
import { Tooltip } from "antd";

const ProductActions = ({ id }) => {
  return (
    <div className="w-full flex justify-between items-center gap-3">
      <Link
        href="/products"
        className="rounded-btn flex items-center gap-2 hoverable p-2"
      >
        <LeftAngle size={10} />
        <p className="text-sm font-medium">Back</p>
      </Link>
      <div className="flex items-center gap-3">
        <Tooltip placement="bottom" title="Go Live">
          <Link
            href={`https://store-onlineshop.liara.run/products/${id}`}
            target="_blank"
            className="hoverable p-3 rounded-btn"
          >
            <EyeOpen className="text-darkGray" />
          </Link>
        </Tooltip>
        <Tooltip placement="bottom" title="Edit">
          <Link
            href={`/products/${id}/edit`}
            className="hoverable p-3 rounded-btn"
          >
            <Edit className="text-darkGray" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductActions;
