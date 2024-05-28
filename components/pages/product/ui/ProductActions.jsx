// next
import Link from "next/link";
// components
import { Edit, EyeOpen, LeftAngle } from "@/components/icons/Icons";
import { Tooltip } from "antd";
import CustomLink from "@/components/shared/CustomLink";
import CustomButton from "@/components/shared/CustomButton";

const ProductActions = ({ id }) => {
  return (
    <div className="w-full flex justify-between items-center gap-3">
      <CustomLink
        href="/products"
        className="backLink"
        title="Back"
        icon={<LeftAngle size={10} />}
      />
      <div className="flex items-center gap-3">
        <Tooltip placement="bottom" title="Go Live">
          <Link
            href={`https://store-onlineshop.liara.run/products/${id}`}
            target="_blank"
          >
            <CustomButton
              icon={<EyeOpen className="text-darkGray" />}
              classNames="iconButton"
            />
          </Link>
        </Tooltip>
        <Tooltip placement="bottom" title="Edit">
          <Link href={`/products/edit/${id}`}>
            <CustomButton
              icon={<Edit className="text-darkGray" />}
              classNames="iconButton"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductActions;
