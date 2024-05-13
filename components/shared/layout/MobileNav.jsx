"use client";

// react
import { Fragment, useState } from "react";
// next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// constants
import { icons, images, menuLinks } from "@/constants";
// components
import { Drawer } from "antd";
import { Logo } from "@/components/icons/Icons";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
        <button onClick={() => onClose()} className="icon_size text-gray-700">
          {icons.close}
        </button>
      </div>
    ),
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="hover:bg-gray-50 p-2 rounded-full Transition"
      >
        {icons.menu}
      </button>
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
          <ul>
            {menuLinks.map((item) => (
              <Fragment key={item.title}>
                <li
                  onClick={() => onClose()}
                  className={`rounded-btn mx-4 Transition mb-[2px] ${
                    pathname === item.link
                      ? "bg-baseLight text-baseDark"
                      : "bg-white text-darkGray hover:bg-lightGray"
                  }`}
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-[20px] px-[10px] py-[12px]"
                  >
                    <div className="icon_size">{item.image}</div>
                    <span class="text-p2">{item.title}</span>
                  </Link>
                </li>
                {item.title === "Customers" && (
                  <div class="w-full h-[1px] my-[10px] bg-gray-200" />
                )}
                {item.title === "Add Blog" && (
                  <div class="w-full h-[1px] my-[10px] bg-gray-200" />
                )}
              </Fragment>
            ))}
            <li className="rounded-btn mx-4 hover:bg-lightRose text-darkRose transition duration-75 ease-in-out">
              <button
                className="flex items-center w-full gap-[20px] p-[10px]"
                onClick={() => signOut()}
              >
                <div className="icon_size">{icons.power}</div>
                <span className="text-p1">Exit</span>
              </button>
            </li>
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default MobileNav;
