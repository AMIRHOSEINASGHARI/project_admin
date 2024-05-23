"use client";

// react
import { useState } from "react";
// actions
import { deleteTask, updateTaskStatus } from "@/actions/task";
// hooks
import useServerAction from "@/hooks/callServerAction";
// cmp
import CustomButton from "@/components/shared/CustomButton";
import Loader from "@/components/shared/Loader";
import { CircleCheck, MenuDots, Trash } from "@/components/icons/Icons";
import { Popover } from "antd";

const TaskActions = ({ id, currentStatus }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const closePopover = () => {
    setIsPopoverOpen(false);
  };
  const onOpenChange = (newOpen) => {
    setIsPopoverOpen(newOpen);
  };

  //   Pop Actions
  const { loading: todoLoading, fn: todoFN } = useServerAction(
    updateTaskStatus,
    {
      id,
      status: "Todo",
    },
    () => closePopover()
  );
  const { loading: progressLoading, fn: progressFN } = useServerAction(
    updateTaskStatus,
    {
      id,
      status: "Progress",
    },
    () => closePopover()
  );
  const { loading: doneLoading, fn: doneFN } = useServerAction(
    updateTaskStatus,
    {
      id,
      status: "Done",
    },
    () => closePopover()
  );
  const { loading: deleteLoading, fn: deleteFN } = useServerAction(
    deleteTask,
    id,
    () => closePopover()
  );

  //   Pop Content
  const popoverContent = (
    <div className="popContainer w-[200px] min-h-[150px] flex flex-col justify-center items-center">
      {todoLoading || progressLoading || doneLoading || deleteLoading ? (
        <Loader height={20} width={20} />
      ) : (
        <>
          <CustomButton
            classNames={`popButton ${
              currentStatus === "Todo" ? "text-darkBlue" : "hoverable"
            }`}
            title="Todo"
            icon={currentStatus === "Todo" && <CircleCheck size={17} />}
            onClick={() => todoFN()}
            disabled={todoLoading || progressLoading || doneLoading}
          />
          <CustomButton
            classNames={`popButton ${
              currentStatus === "Progress" ? "text-darkOrange" : "hoverable"
            }`}
            title="Progress"
            icon={currentStatus === "Progress" && <CircleCheck size={17} />}
            onClick={() => progressFN()}
            disabled={todoLoading || progressLoading || doneLoading}
          />
          <CustomButton
            classNames={`popButton ${
              currentStatus === "Done" ? "text-darkGreen" : "hoverable"
            }`}
            title="Done"
            icon={currentStatus === "Done" && <CircleCheck size={17} />}
            onClick={() => doneFN()}
            disabled={todoLoading || progressLoading || doneLoading}
          />
          <div className="bg-gray-200 w-full h-[1px]" />
          <CustomButton
            classNames="popButton hoverable"
            title="Delete"
            icon={<Trash size={17} />}
            onClick={() => deleteFN()}
            disabled={
              todoLoading || progressLoading || doneLoading || deleteLoading
            }
          />
        </>
      )}
    </div>
  );

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={onOpenChange}
      overlayInnerStyle={{
        padding: "0",
      }}
      content={popoverContent}
      trigger="click"
      placement="leftTop"
    >
      <CustomButton
        type="button"
        icon={<MenuDots size={15} />}
        classNames="rounded-full w-[35px] h-[35px] flex items-center justify-center hoverable"
      />
    </Popover>
  );
};

export default TaskActions;
