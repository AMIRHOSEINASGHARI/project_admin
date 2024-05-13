"use client";

import { icons } from "@/constants";

const NavbarSearchBox = () => {
  return (
    <div>
      <button className="p-2 icon_size hover:bg-gray-100 text-darkGray rounded-full Transition">
        {icons.search}
      </button>
    </div>
  );
};

export default NavbarSearchBox;
