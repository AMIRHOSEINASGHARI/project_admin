"use client";

// constants
import { ordersColumns } from "@/constants/tableColumns";
import { ordersListDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Table } from "antd";
import { DownAngle, UpAngle } from "@/components/icons/Icons";

const OrdersList = ({ orders }) => {
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
      dataSource={ordersListDataSourse(orders)}
      scroll={{ x: true }}
      expandable={expandable}
    />
  );
};

export default OrdersList;
