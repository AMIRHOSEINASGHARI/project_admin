"use client";

// actions
import { signOut } from "@/actions/auth";
// constants
import { icons } from "@/constants";

const SignoutButton = ({ title, style, btnClassName, titleClassName }) => {
  return (
    <button onClick={() => signOut()} className={style || ""}>
      <div className={btnClassName || ""}>{icons.power}</div>
      {title && <p className={titleClassName || ""}>{title}</p>}
    </button>
  );
};

export default SignoutButton;
