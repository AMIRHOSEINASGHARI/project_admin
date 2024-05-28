"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
import Image from "next/image";
// hooks
import useSession from "@/hooks/session";
// constants
import { images } from "@/constants";
// cmp
import { Exclamation, Home, Settings, Task } from "@/components/icons/Icons";
import SignoutButton from "../SignoutButton";
import CustomBadge from "../CustomBadge";
import Loader from "../Loader";
import { Popover, Tooltip } from "antd";

const ShowProfile = () => {
  const [open, setOpen] = useState(false);
  const { data, isError, isLoading } = useSession();

  const onOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onClose = () => {
    setOpen(false);
  };
  const content = (
    <div className="min-w-[250px]">
      <div className="p-5">
        <p className="text-h4 font-bold">{data?.session?.username}</p>
        <p className="capitalize text-p2 text-darkGray">
          {data?.session?.name}
        </p>
        <div className="flex justify-end">
          <CustomBadge
            condition={
              data?.session?.roll === "OWNER" || data?.session?.roll === "ADMIN"
            }
            title={data?.session?.roll}
          />
        </div>
      </div>
      <hr />
      <div className="p-3 space-y-1">
        <Link
          onClick={onClose}
          href="/dashboard"
          className="flex items-center gap-btn rounded-btn hover:bg-lightGray Transition px-2 py-1.5"
        >
          <Home className="text-darkGray" size={17} />
          <p>Dashboard</p>
        </Link>
        <Link
          onClick={onClose}
          href="/tasks"
          className="flex items-center gap-btn rounded-btn hover:bg-lightGray Transition px-2 py-1.5"
        >
          <Task className="text-darkGray" size={17} />
          <p>Tasks</p>
        </Link>
        <Link
          onClick={onClose}
          href="/account"
          className="flex items-center gap-btn rounded-btn hover:bg-lightGray Transition px-2 py-1.5"
        >
          <Settings className="text-darkGray" size={17} />
          <p>Account</p>
        </Link>
      </div>
      <hr />
      <div className="p-3">
        <SignoutButton
          onClick={onClose}
          title="Logout"
          style="flex items-center gap-btn text-darkRose w-full rounded-btn hover:bg-lightRose Transition px-2 py-1.5"
        />
      </div>
    </div>
  );

  if (isLoading) {
    return <Loader height={20} width={20} />;
  }

  if (isError) {
    return (
      <Tooltip title="Failed to fetch data!" placement="left">
        <Exclamation size={20} className="text-darkRose" />
      </Tooltip>
    );
  }

  return (
    <Popover
      overlayInnerStyle={{
        padding: "0",
      }}
      content={content}
      trigger="click"
      placement="bottomLeft"
      open={open}
      onOpenChange={onOpenChange}
    >
      <Image
        src={data?.session?.avatar || images.admin}
        width={200}
        height={200}
        alt="user"
        priority
        className="cursor-pointer rounded-full w-[40px] h-[40px]"
      />
    </Popover>
  );
};

export default ShowProfile;
