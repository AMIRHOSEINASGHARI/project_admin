import { Empty } from "antd";
import React from "react";

const OrdersTab = ({ orders }) => {
  if (orders.length === 0) {
    return <Empty description="No Orders!" />;
  }
  return <div>OrdersTab</div>;
};

export default OrdersTab;
