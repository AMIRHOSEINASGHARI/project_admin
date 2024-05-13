// next
import Link from "next/link";
// utils
import { getServerSession } from "@/utils/session";
// constants
import { images } from "@/constants";
// cmp
import { Avatar, Popover } from "antd";
import { Home, Settings } from "@/components/icons/Icons";
import SignoutButton from "../SignoutButton";

const ShowProfile = () => {
  const session = getServerSession();

  const content = (
    <div className="min-w-[250px]">
      <div className="p-5">
        <p className="text-h4 font-bold">{session.username}</p>
        <p className="capitalize text-p2 text-darkGray">{session.name}</p>
        <div className="flex justify-end">
          <p
            className={`text-p2 w-fit px-1 py-.5 rounded-btn ${
              session.roll === "OWNER"
                ? "text-darkGreen bg-lightGreen"
                : session.roll === "ADMIN"
                ? "text-darkOrange bg-lightOrange"
                : "text-darkRose bg-lightRose"
            }`}
          >
            {session.roll}
          </p>
        </div>
      </div>
      <hr />
      <div className="p-3 space-y-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-btn rounded-btn hover:bg-lightRose Transition px-2 py-1.5"
        >
          <Home className="text-darkGray" size={17} />
          <p>Dashboard</p>
        </Link>
        <Link
          href="/account"
          className="flex items-center gap-btn rounded-btn hover:bg-lightRose Transition px-2 py-1.5"
        >
          <Settings className="text-darkGray" size={17} />
          <p>Account</p>
        </Link>
      </div>
      <hr />
      <div className="p-3">
        <SignoutButton
          title="Logout"
          style="flex items-center gap-btn text-darkRose w-full rounded-btn hover:bg-lightRose Transition px-2 py-1.5"
        />
      </div>
    </div>
  );

  return (
    <Popover
      overlayInnerStyle={{
        padding: "0",
      }}
      content={content}
      trigger="click"
      placement="bottomLeft"
    >
      <Avatar
        src={session.avatar || images.person}
        className="cursor-pointer"
        size="large"
      />
    </Popover>
  );
};

export default ShowProfile;
