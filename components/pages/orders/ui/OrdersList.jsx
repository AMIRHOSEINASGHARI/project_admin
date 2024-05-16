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

const OrdersList = ({ orders }) => {
  const dataSourse = orders.map((order) => ({
    key: order._id,
    _id: `#${shorterText(order._id, 10)}`,
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
    actions: <OrdersActions />,
  }));

  return <Table columns={ordersColumns} dataSource={dataSourse} />;
};

export default OrdersList;
