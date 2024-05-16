"use client";

// next
import Link from "next/link";
// utils
import { shorterText } from "@/utils/functions";
// constants
import { productOrdersColumns } from "@/constants/tableColumns";
// cmp
import { Empty, Table } from "antd";

const OrdersTab = ({ orders, productId }) => {
  if (orders.length === 0) {
    return <Empty description="No Orders!" />;
  }

  let productOrders = [];
  for (const i of orders) {
    const filtered = i.orderId.items.filter(
      (item) => item.productId === productId
    );
    productOrders.push({ ...filtered[0], orderId: i.orderId._id });
  }

  const dataSourse = productOrders.map((order) => ({
    key: order._id,
    orderId: (
      <Link href={`/orders/${order.orderId}`}>
        {shorterText(order.orderId, 10)}
      </Link>
    ),
    qty: order.quantity.toLocaleString(),
    discount: order.discount > 0 ? `%${order.discount}` : "_",
    cost: `$${order.cost.toLocaleString()}`,
  }));

  return (
    <Table
      pagination={false}
      columns={productOrdersColumns}
      dataSource={dataSourse}
    />
  );
};

export default OrdersTab;
