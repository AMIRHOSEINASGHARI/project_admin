"use client";

// constants
import { userOrdersColumns } from "@/constants/tableColumns";
import { userOrdersDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Table } from "antd";

const UserOrders = ({ orders }) => {
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
