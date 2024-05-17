"use client";

// constants
import { productOrdersColumns } from "@/constants/tableColumns";
import { productOrdersTabDataSourse } from "@/constants/tableDataSourse";
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

  return (
    <Table
      pagination={false}
      columns={productOrdersColumns}
      dataSource={productOrdersTabDataSourse(productOrders)}
    />
  );
};

export default OrdersTab;
