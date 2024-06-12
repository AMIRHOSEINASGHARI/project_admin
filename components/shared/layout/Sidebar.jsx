"use client";

// react
import React, { Fragment } from "react";
// next
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
// actions
import { signOut } from "@/actions/auth";
// hooks
import useSession from "@/hooks/session";
// constants
import { icons, images, menuLinks } from "@/constants";
// cmp
import { Image } from "@nextui-org/image";
import { BorderHeart, Logo, MenuDots } from "@/components/icons/Icons";
import Loader from "../Loader";

const Sidebar = () => {
  const pathname = usePathname();
  const { data, isError, isLoading } = useSession();

  return (
    <aside className="w-[250px] border-r border-gray-200 max-md:hidden fixed z-30 left-0 h-screen bg-white overflow-y-auto sidebarScroll">
      <div className="flex items-center justify-between fixed bg-white p-4 top-0 w-[250px] z-20 border-r border-gray-200">
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
      </div>
      <nav className="pt-[74px] pb-5">
        <Link
          href="/account"
          className="border-2 rounded-full p-2 mx-4 flex items-center justify-between gap-2 cursor-pointer hoverable"
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
    </aside>
  );
};

export default Sidebar;
