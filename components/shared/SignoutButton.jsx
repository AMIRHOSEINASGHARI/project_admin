"use client";

// actions
import { signOut } from "@/actions/auth";
// constants
import { icons } from "@/constants";

const SignoutButton = ({ title }) => {
  return (
    <button
      onClick={() => signOut()}
      className="p-2 hover:bg-gray-100 rounded-full Transition text-[22px] flex items-center gap-btn"
    >
      <div className="text-darkGray">{icons.power}</div>
      {title && <p className="text-p1">{title}</p>}
    </button>
  );
};

export default SignoutButton;
