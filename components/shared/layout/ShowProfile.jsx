"use client";

// react
import { useState } from "react";
// next
import Link from "next/link";
import NextImage from "next/image";
// hooks
import useSession from "@/hooks/session";
// constants
import { images } from "@/constants";
// cmp
import SignoutButton from "../SignoutButton";
import CustomBadge from "../CustomBadge";
import Loader from "../Loader";
import {
  Close,
  Exclamation,
  Home,
  LayerPlus,
  Settings,
  ShoppingBasket,
  Task,
  User,
} from "@/components/icons/Icons";
import { Drawer, Popover, Tooltip } from "antd";
import { Avatar } from "@nextui-org/avatar";
import CustomButton from "../CustomButton";
import { Image } from "@nextui-org/react";

const ShowProfile = () => {
  const [open, setOpen] = useState(false);
  const { data, isError, isLoading } = useSession();

  const onClose = () => {
    setOpen(false);
  };

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

  const _drawer = {
    styles: {
      body: { padding: "0px", margin: "10px 0px" },
      header: { padding: "10px" },
    },
    title: (
      <CustomButton
        onClick={() => onClose()}
        icon={<Close />}
        classNames="p-3 rounded-full hoverable"
      />
    ),
  };

  const links = [
    {
      icon: <Home />,
      name: "Home",
      href: "/dashboard",
    },
    {
      icon: <User />,
      name: "Profile",
      href: "/account",
    },
    {
      icon: <Task />,
      name: "Tasks",
      href: "/tasks",
    },
    {
      icon: <ShoppingBasket />,
      name: "Products",
      href: "/products",
    },
    {
      icon: <LayerPlus />,
      name: "New Product",
      href: "/add-product",
    },
  ];

  return (
    <>
      <CustomButton
        onClick={() => setOpen(true)}
        classNames="flex"
        title={
          <Avatar
            src={data?.session?.avatar || images.admin}
            isBordered
            className="cursor-pointer ml-2"
          />
        }
      />
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={false}
        styles={{
          body: {
            padding: "0px",
            margin: "10px 0px",
          },
          wrapper: {
            boxShadow: "-15px 0px 15px rgba(0,0,0,0.05)",
          },
          content: {
            backgroundColor: "white",
            backdropFilter: "blur(10px)",
          },
          header: { padding: "10px", border: "none" },
          mask: {
            background: "none",
          },
        }}
        title={_drawer.title}
        width={320}
      >
        <div className="pb-[80px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              as={NextImage}
              src={data?.session?.avatar || images.admin}
              width={200}
              height={200}
              alt="user"
              radius="full"
              className="w-[100px] h-[100px] mb-2"
            />
            <p className="font-medium">{data?.session?.username}</p>
            <p className="text-darkGray mb-2">{data?.session?.name}</p>
            <CustomBadge
              title={data?.session?.roll}
              colors={
                data?.session?.roll === "OWNER"
                  ? "bg-lightGreen text-darkGreen"
                  : data?.session?.roll === "ADMIN"
                  ? "bg-lightBlue text-darkBlue"
                  : "bg-lightRose text-darkRose"
              }
            />
          </div>
          <div className="w-full h-[1px] bg-gray-300 my-5" />
          <ul className="px-[20px] space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-5 px-2 py-3 rounded-btn hoverable"
                  onClick={() => onClose()}
                >
                  <div>{link.icon}</div>
                  <p>{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white absolute bottom-0 right-0 left-0 p-3">
          <SignoutButton
            title="Logout"
            btnClassName="w-full bg-rose-100 hover:bg-rose-200 Transition font-bold text-darkRose p-3 rounded-btn"
            onClick={() => onClose()}
          />
        </div>
      </Drawer>
    </>
  );
};

export default ShowProfile;
