"use client";

// constants
import { ordersColumns } from "@/constants/tableColumns";
import { ordersListDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Table } from "antd";

const OrdersTable = ({ orders }) => {
  return (
    <div className="tableContainer">
      <Table
        columns={ordersColumns}
        dataSource={ordersListDataSourse(orders)}
        scroll={{ x: true }}
        pagination={false}
      />
    </div>
  );
};

export default OrdersTable;
