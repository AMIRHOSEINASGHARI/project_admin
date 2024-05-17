"use client";

// next
import Image from "next/image";
import Link from "next/link";
// constants
import { images } from "@/constants";
import { ordersColumns } from "@/constants/tableColumns";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import { Table } from "antd";
import moment from "moment";
import OrdersActions from "./OrdersActions";
import { DownAngle, UpAngle } from "@/components/icons/Icons";

const OrdersList = ({ orders }) => {
  const dataSourse = orders.map((order) => ({
    key: order._id,
    _id: (
      <Link href={`/orders/${order._id}`}>#{shorterText(order._id, 10)}</Link>
    ),
    userId: (
      <Link href={`/users/${order.userId._id}`}>
        <div className="flex items-center gap-3">
          <Image
            src={order.userId.avatar || images.person}
            width={35}
            height={35}
            alt={shorterText(order.userId.username, 8)}
            priority
          />
          <div>
            <p className="text-p1 font-medium line-clamp-3">
              {order.userId.username}
            </p>
            {order.userId.displayName && (
              <p className="text-p2 text-darkGray">
                {order.userId.displayName}
              </p>
            )}
          </div>
        </div>
      </Link>
    ),
    createdAt: moment(order.createdAt).format("L"),
    totalProducts: order.summary.totalProducts.toLocaleString(),
    totalPayable: `$${order.summary.totalPayable.toLocaleString()}`,
    status: (
      <p
        className={`py-.5 px-2 w-fit rounded-btn text-p2 font-medium ${
          order.status === "Pending"
            ? "bg-lightOrange text-darkOrange"
            : "bg-lightGreen text-darkGreen"
        }`}
      >
        {order.status}
      </p>
    ),
    actions: <OrdersActions orderId={order._id} />,
    expandedContent: order.items.map((item) => (
      <div
        key={item._id}
        className="bg-lightGray p-2 border flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px]">
            <Image
              src={item.productId.image}
              width={50}
              height={50}
              alt="product image"
              priority
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <p className="line-clamp-2">{item.productId.title}</p>
        </div>
        <div className="flex items-center justify-between gap-10">
          <p className="text-p1 font-medium">×{item.quantity}</p>
          <p>${item.quantity * item.cost}</p>
        </div>
      </div>
    )),
  }));

  const expandable = {
    expandedRowRender: (record) => (
      <div className="m-2 rounded-xl overflow-hidden space-y-1">
        {record.expandedContent}
      </div>
    ),
    expandIcon: ({ expanded, onExpand, record }) =>
      expanded ? (
        <UpAngle
          wrapperClassName="hoverable p-3 cursor-pointer rounded-full"
          size={13}
          onClick={(e) => onExpand(record, e)}
        />
      ) : (
        <DownAngle
          wrapperClassName="hoverable p-3 cursor-pointer rounded-full"
          size={13}
          onClick={(e) => onExpand(record, e)}
        />
      ),
  };

  return (
    <Table
      columns={ordersColumns}
      dataSource={dataSourse}
      scroll={{ x: true }}
      expandable={expandable}
    />
  );
};

export default OrdersList;
