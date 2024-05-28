"use client";

// react
import { useState } from "react";
// cmp
import CustomButton from "@/components/shared/CustomButton";
import { CircleCheck, MenuDots } from "@/components/icons/Icons";
import { Popover } from "antd";

const AdminActions = ({ roll }) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onOpen = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(!open);
  };

  const content = (
    <div className="popContainer w-[150px]">
      <CustomButton
        title={
          roll === "ADMIN" ? (
            <div className="flex items-center gap-2 text-darkBlue">
              <CircleCheck />
              <p>ADMIN</p>
            </div>
          ) : (
            "ADMIN"
          )
        }
        classNames="popButton hoverable"
        disabled={roll === "ADMIN"}
      />
      <CustomButton
        title={
          roll === "USER" ? (
            <div className="flex items-center gap-2 text-darkBlue">
              <CircleCheck />
              <p>USER</p>
            </div>
          ) : (
            "USER"
          )
        }
        classNames="popButton hoverable"
        disabled={roll === "USER"}
      />
    </div>
  );

  return (
    <Popover
      overlayInnerStyle={{
        padding: "0",
      }}
      content={content}
      open={open}
      onOpenChange={onOpenChange}
      trigger="click"
      placement="leftTop"
    >
      <CustomButton
        type="button"
        icon={<MenuDots size={18} />}
        classNames="iconButton"
        onClick={onOpen}
      />
    </Popover>
  );
};

export default AdminActions;
