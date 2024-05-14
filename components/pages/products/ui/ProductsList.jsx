"use client";

// next
import Link from "next/link";
import Image from "next/image";
// utils
import { shorterText } from "@/utils/functions";
// constants
import { productColumn } from "@/constants/tableColumns";
// componnets
import { Table } from "antd";
import moment from "moment";

const ProductsList = ({ products }) => {
  const dataSource = products.map((product) => ({
    key: product._id,
    name: (
      <Link
        href={`/products/${product._id}`}
        className="flex items-center gap-2 w-fit"
      >
        <div className="w-[100px] h-[100px] flex items-center justify-center">
          <Image
            src={product.image}
            width={70}
            height={70}
            alt="product"
            radius="none"
            priority
            className="object-cover"
          />
        </div>
        <div>
          <p>{shorterText(product.title, 15)}...</p>
          <p>In {product.category}</p>
        </div>
      </Link>
    ),
    id: <p>#{shorterText(product._id, 6)}</p>,
    stock: (
      <p
        className={`w-fit ${
          product.stock === 0 &&
          "text-darkRose px-2 rounded-xl bg-lightRose font-bold text-xs"
        }`}
      >
        {product.stock === 0 ? "None!" : product.stock.toLocaleString()}
      </p>
    ),
    price: `$${product.price.toLocaleString()}`,
    discount: product.discount || "_",
    orders: product.orders.length || "_",
    comments: product.comments.length || "_",
    likes: product.likes.length || "_",
    date: moment(product.createdAt).calendar(),
  }));

  return (
    <div>
      <Table
        scroll={{ x: true }}
        pagination={false}
        columns={productColumn}
        dataSource={dataSource}
      />
    </div>
  );
};

export default ProductsList;
