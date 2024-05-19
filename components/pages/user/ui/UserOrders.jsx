"use client";

// constants
import { userOrdersColumns } from "@/constants/tableColumns";
import { userOrdersDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Empty, Table } from "antd";

const UserOrders = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <div className="box w-full">
        <Empty description="No Orders!" />
      </div>
    );
  }

  return (
    <div className="w-full tableContainer border-none">
      <Table
        columns={userOrdersColumns}
        pagination={false}
        scroll={{ x: true }}
        dataSource={userOrdersDataSourse(orders)}
      />
    </div>
  );
};

export default UserOrders;
