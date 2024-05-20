// next
import Link from "next/link";
import Image from "next/image";
// utils
import { getServerSession } from "@/utils/session";
// constants
import { images } from "@/constants";
// cmp
import { Popover } from "antd";
import { Home, Settings } from "@/components/icons/Icons";
import SignoutButton from "../SignoutButton";
import CustomBadge from "../CustomBadge";

// TODO: handle close popover and open in client side
const ShowProfile = () => {
  const session = getServerSession();

  const content = (
    <div className="min-w-[250px]">
      <div className="p-5">
        <p className="text-h4 font-bold">{session.username}</p>
        <p className="capitalize text-p2 text-darkGray">{session.name}</p>
        <div className="flex justify-end">
          <CustomBadge
            condition={session.roll === "OWNER" || session.roll === "ADMIN"}
            title={session.roll}
          />
        </div>
      </div>
      <hr />
      <div className="p-3 space-y-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-btn rounded-btn hover:bg-lightGray Transition px-2 py-1.5"
        >
          <Home className="text-darkGray" size={17} />
          <p>Dashboard</p>
        </Link>
        <Link
          href="/account"
          className="flex items-center gap-btn rounded-btn hover:bg-lightGray Transition px-2 py-1.5"
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
      <Image
        src={session.avatar || images.person}
        width={200}
        height={200}
        alt="user"
        priority
        className="cursor-pointer rounded-full w-[40px] h-[40px]"
      />
    </Popover>
  );
};

export default ShowProfile;
