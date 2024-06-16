// next
import Link from "next/link";
// actions
import { upcommingEvents } from "@/actions/task";
// constants
import { upcommingEventsCollumns } from "@/constants/tableColumns";
import { upcommingEventsDataSourse } from "@/constants/tableDataSourse";
// cmp
import { RightAngle } from "@/components/icons/Icons";
import { Table } from "antd";

const UpcommingEvents = async () => {
  try {
    const data = await upcommingEvents();

    if (data.code !== 200) {
      return <p>Error</p>;
    }

    return (
      <div className="tableContainer border-none min-w-[280px] h-fit">
        <div className="p-6">
          <h1 className="h2">Upcomming Events</h1>
        </div>
        <Table
          columns={upcommingEventsCollumns}
          dataSource={upcommingEventsDataSourse(data.tasks)}
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
  } catch (error) {
    return <p>Error</p>;
  }
};

export default UpcommingEvents;
