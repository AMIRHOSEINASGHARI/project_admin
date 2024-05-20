"use client";

import CustomButton from "../CustomButton";
import { Search } from "@/components/icons/Icons";

const NavbarSearchBox = () => {
  return (
    <div>
      <CustomButton icon={<Search />} classNames="iconButton" />
    </div>
  );
};

export default NavbarSearchBox;
