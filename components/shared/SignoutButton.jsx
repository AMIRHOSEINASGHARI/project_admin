"use client";

// actions
import { signOut } from "@/actions/auth";
// constants
import CustomButton from "./CustomButton";
import { Power } from "../icons/Icons";

const SignoutButton = ({ title, btnClassName }) => {
  return (
    <CustomButton
      onClick={() => signOut()}
      title={title || <Power />}
      classNames={btnClassName || "iconButton"}
    />
  );
};

export default SignoutButton;
