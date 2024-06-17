"use client";

// react
import { Fragment, useState } from "react";
// next
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
// hooks
import useSession from "@/hooks/session";
// constants
import { icons, images, menuLinks } from "@/constants";
// components
import { Image } from "@nextui-org/react";
import { Drawer } from "antd";
import { Close, Logo, MenuBars, MenuDots } from "@/components/icons/Icons";
import CustomButton from "../CustomButton";
import Loader from "../Loader";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data, isError, isLoading } = useSession();

  const onClose = () => {
    setOpen(false);
  };

  const _drawer = {
    styles: {
      body: { padding: "0px", margin: "10px 0px" },
      header: { padding: "15px 20px" },
    },
    title: (
      <div className="flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-[10px]">
          <Logo
            wrapperClassName="ml-[8px]"
            size={40}
            className="text-baseDark"
          />

          <div className="flex items-center italic font-bold">
            <span className="text-baseDark">Online</span>
            <span className="text-dark1">Shop</span>
          </div>
        </Link>
        <CustomButton
          onClick={() => onClose()}
          icon={<Close />}
          classNames="iconButton"
        />
      </div>
    ),
  };

  return (
    <div>
      <CustomButton
        icon={<MenuBars />}
        onClick={() => setOpen(true)}
        classNames="iconButton"
      />
      <Drawer
        placement="left"
        onClose={onClose}
        open={open}
        closeIcon={false}
        styles={_drawer.styles}
        title={_drawer.title}
        width={250}
      >
        <nav>
          <Link
            href="/account"
            className="border-2 rounded-full p-2 mx-4 flex items-center justify-between gap-2 cursor-pointer hoverable"
            onClick={() => onClose()}
          >
            {isLoading && (
              <div className="flex items-center justify-center w-full py-1">
                <Loader width={20} height={20} />
              </div>
            )}
            {isError && <p>Error!</p>}
            {data?.success && (
              <>
                <div className="flex items-center gap-2">
                  <Image
                    as={NextImage}
                    src={data?.session?.avatar || images.admin}
                    width={100}
                    height={100}
                    alt="user"
                    radius="full"
                    className="w-[35px] h-[35px]"
                  />
                  <p className="text-p2 capitalize">{data?.session?.name}</p>
                </div>
                <MenuDots size={15} wrapperClassName="iconButton" />
              </>
            )}
          </Link>
          <div className="ml-4 mb-2 mt-5">
            <h1 className="text-p1 text-gray-400">Overview</h1>
          </div>
          <ul>
            {menuLinks.map((item) => (
              <Fragment key={item.title}>
                <li
                  className={`rounded-l-btn ml-4 Transition mb-[2px] border-r-4 ${
                    pathname === item.link
                      ? "bg-baseLight text-baseDark border-darkPurple"
                      : "bg-white text-black hover:bg-lightGray border-transparent"
                  }`}
                >
                  <Link
                    href={item.link}
                    className="flex Transition items-center gap-[20px] py-[12px] px-[10px]"
                    onClick={() => onClose()}
                  >
                    <div className="icon_size">{item.image}</div>
                    <span className="text-p1">{item.title}</span>
                  </Link>
                </li>
                {item.title === "Crypto" && (
                  <div className="ml-4 mb-2 mt-5">
                    <h1 className="text-p1 text-gray-400">Management</h1>
                  </div>
                )}
                {item.title === "Add Blog" && (
                  <div className="ml-4 mb-2 mt-5">
                    <h1 className="text-p1 text-gray-400">Settings</h1>
                  </div>
                )}
              </Fragment>
            ))}
            <li className="rounded-btn mx-4 hover:bg-lightRose text-darkRose transition duration-75 ease-in-out">
              <button
                className="flex items-center w-full gap-[20px] p-[10px]"
                onClick={() => signOut()}
              >
                <div className="icon_size">{icons.power}</div>
                <span className="text-[17px] font-black">Exit</span>
              </button>
            </li>
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default MobileNav;
