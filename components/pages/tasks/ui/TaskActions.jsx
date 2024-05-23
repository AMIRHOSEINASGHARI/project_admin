"use client";

// react
import { useState } from "react";
import CustomButton from "@/components/shared/CustomButton";
import { CircleCheck, MenuDots, Trash } from "@/components/icons/Icons";
import { Popover } from "antd";

const TaskActions = ({ id, currentStatus }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const popoverContent = (
    <div className="popContainer w-[200px]">
      <CustomButton
        classNames={`popButton ${
          currentStatus === "Todo" ? "text-darkBlue" : "hoverable"
        }`}
        title="Todo"
        icon={currentStatus === "Todo" && <CircleCheck size={17} />}
      />
      <CustomButton
        classNames={`popButton ${
          currentStatus === "Progress" ? "text-darkOrange" : "hoverable"
        }`}
        title="Progress"
        icon={currentStatus === "Progress" && <CircleCheck size={17} />}
      />
      <CustomButton
        classNames={`popButton ${
          currentStatus === "Done" ? "text-darkGreen" : "hoverable"
        }`}
        title="Done"
        icon={currentStatus === "Done" && <CircleCheck size={17} />}
      />
      <hr />
      <CustomButton
        classNames="popButton hoverable"
        title="Delete"
        icon={<Trash size={17} />}
      />
    </div>
  );
  const closePopover = () => {
    setIsPopoverOpen(false);
  };
  const onOpenChange = (newOpen) => {
    setIsPopoverOpen(newOpen);
  };

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
