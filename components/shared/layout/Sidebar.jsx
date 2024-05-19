"use client";

// react
import React, { Fragment } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// actions
import { signOut } from "@/actions/auth";
// constants
import { icons, menuLinks } from "@/constants";
// cmp
import { Logo } from "@/components/icons/Icons";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] border-r border-gray-200 max-md:hidden fixed z-30 left-0 h-screen bg-white overflow-y-auto sidebarScroll">
      <div className="flex items-center justify-between fixed bg-white p-4 top-0 w-[250px] border-r border-gray-200">
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
              {item.title === "Customers" && (
                <div className="w-full h-[1px] my-[10px] bg-lightGray" />
              )}
              {item.title === "Add Blog" && (
                <div className="w-full h-[1px] my-[10px] bg-lightGray" />
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
