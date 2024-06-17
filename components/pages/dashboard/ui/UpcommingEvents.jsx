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
import EventsTable from "./EventsTable";

const UpcommingEvents = async () => {
  try {
    const data = await upcommingEvents();

    if (data.code !== 200) {
      return <p>Error</p>;
    }

    return <EventsTable events={JSON.parse(JSON.stringify(data.tasks))} />;
  } catch (error) {
    return <p>Error</p>;
  }
};

export default UpcommingEvents;
