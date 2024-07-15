// actions
import { upcommingEvents } from "@/actions/task";
// cmp
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
