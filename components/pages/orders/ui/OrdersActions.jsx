// react
import { useState } from "react";
// next
import Link from "next/link";
// cmp
import CustomButton from "@/components/shared/CustomButton";
import Loader from "@/components/shared/Loader";
import { EyeOpen, MenuDots, Trash } from "@/components/icons/Icons";
import { Popover } from "antd";

const OrdersActions = ({ orderId }) => {
  const [openPopover, setOpenPopover] = useState(false);

  const onOpenChange = (newOpen) => {
    setOpenPopover(newOpen);
  };

  const content = (
    <div className="p-1 flex flex-col gap-1 w-[150px]">
      <CustomButton
        onClick={() => setOpenPopover(false)}
        classNames="flex justify-center w-full"
        title={
          false ? (
            <Loader width={15} height={15} className="py-1" />
          ) : (
            <div
              className={`flex w-full items-center hoverable py-1 px-2 gap-4 rounded-btn hover:bg-lightRose text-darkRose`}
            >
              <Trash />
              <p>Delete</p>
            </div>
          )
        }
      />
      <Link href={`/orders/${orderId}`} classNames="flex justify-center w-full">
        <div
          className={`flex w-full items-center hoverable py-1 px-2 gap-4 rounded-btn ${
            false && "bg-gray-200"
          }`}
        >
          <EyeOpen />
          <p>View</p>
        </div>
      </Link>
    </div>
  );

  return (
    <Popover
      open={openPopover}
      onOpenChange={onOpenChange}
      overlayInnerStyle={{
        padding: "0",
      }}
      content={content}
      trigger="click"
      placement="bottomLeft"
    >
      <MenuDots
        wrapperClassName="hoverable p-3 cursor-pointer rounded-full w-fit"
        size={13}
      />
    </Popover>
  );
};

export default OrdersActions;
