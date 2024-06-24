// next
import Link from "next/link";
import NextImage from "next/image";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import { Image } from "@nextui-org/react";
import { EyeOpen } from "@/components/icons/Icons";

const ProductsResult = ({ products, closeModal }) => {
  return (
    <div>
      <h1 className="text-h3 font-medium mb-2">Products</h1>
      {products.map((product) => (
        <Link
          href={`/products/${product._id}`}
          key={product._id}
          className="flex items-center gap-3 flex-wrap justify-between hoverable rounded-btn py-2 px-3"
          onClick={closeModal}
        >
          <div className="flex items-center gap-4">
            <Image
              as={NextImage}
              src={product.image}
              width={100}
              height={100}
              alt="product"
              radius="none"
              className="w-[50px] h-[50px]"
            />
            <div>
              <p className="text-p1 font-medium">
                {shorterText(product.title, 30)}
              </p>
              <p className="text-p2 text-darkGray">
                ${product.price.toLocaleString()} / Stock:{" "}
                {product.stock.toLocaleString()}
              </p>
            </div>
          </div>
          <EyeOpen />
        </Link>
      ))}
    </div>
  );
};

export default ProductsResult;
