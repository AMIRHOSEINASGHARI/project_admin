"use client";

import { RightAngle } from "@/components/icons/Icons";
import { upcommingEventsCollumns } from "@/constants/tableColumns";
import { upcommingEventsDataSourse } from "@/constants/tableDataSourse";
import { Table } from "antd";
import Link from "next/link";

const EventsTable = ({ events }) => {
  return (
    <div className="tableContainer border-none min-w-[280px] max-xl:w-full xl:w-1/3 h-fit">
      <div className="p-6">
        <h1 className="h2">Upcomming Events</h1>
      </div>
      <Table
        columns={upcommingEventsCollumns}
        dataSource={upcommingEventsDataSourse(events)}
        pagination={false}
        scroll={{ x: true }}
        showHeader={false}
      />
      <Link
        href="/tasks"
        className="flex items-center gap-3 m-3 hoverable w-fit p-btn rounded-btn"
      >
        <p className="text-p2">See All Events</p> <RightAngle size={10} />
      </Link>
    </div>
  );
};

export default EventsTable;
