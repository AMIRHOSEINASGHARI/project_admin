// utils
import { getServerSession } from "@/utils/session";
// constants
import { images } from "@/constants";
// cmp
import { Clock } from "@/components/icons/Icons";
import { Badge, Empty } from "antd";
import moment from "moment";
import TaskActions from "./TaskActions";
import EditTask from "./EditTask";
import { Avatar } from "@nextui-org/react";

const StatusBox = ({ status, taskCount, tasks }) => {
  const session = getServerSession();

  return (
    <div className="flex flex-col gap-5">
      <Badge count={taskCount}>
        <h3 className="h3">{status}</h3>
      </Badge>
      <div className="bg-lightGray rounded-box p-box flex flex-col gap-4">
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <div
              key={task._id}
              className="rounded-box p-box border bg-white flex flex-col gap-4"
            >
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Clock
                    size={17}
                    wrapperClassName="cardShadow p-3 rounded-btn"
                  />
                  <p className="text-darkGray text-p1 capitalize">
                    {moment(task.dueDate).fromNow()}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <EditTask
                    id={JSON.parse(JSON.stringify(task._id))}
                    session={JSON.parse(JSON.stringify(session))}
                  />
                  <TaskActions
                    id={JSON.parse(JSON.stringify(task._id))}
                    currentStatus={JSON.parse(JSON.stringify(task.status))}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-medium">{task.title}</p>
                <p className="text-darkGray text-p1">{task.description}</p>
              </div>
              <div className="flex justify-between items-center gap-2 w-full">
                <div className="flex items-center gap-3">
                  <Avatar src={task.createdBy.avatar || images.admin} />
                  <div>
                    <p className="text-p1 font-medium">
                      {task.createdBy.username}
                    </p>
                    {task.createdBy.name && (
                      <p className="text-p2 text-darkGray -mt-1">
                        {task.createdBy.name}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-darkGray text-p2">
                  {moment(task.createdAt).format("LL")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <Empty description="No Task!" />
        )}
      </div>
    </div>
  );
};

export default StatusBox;
