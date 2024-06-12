"use client";

// react
import { useState } from "react";
// actions
import { changeRole, deleteAdmin } from "@/actions/admin";
// hooks
import useServerAction from "@/hooks/callServerAction";
// cmp
import CustomButton from "@/components/shared/CustomButton";
import Loader from "@/components/shared/Loader";
import {
  CircleCheck,
  EyeOpen,
  MenuDots,
  Trash,
} from "@/components/icons/Icons";
import { Popover } from "antd";
import Link from "next/link";

const AdminActions = ({ roll, userId, showMore }) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onOpen = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(!open);
  };

  const { loading: makeAdminLoading, fn: makeAdminFN } = useServerAction(
    changeRole,
    { userId, role: "ADMIN" },
    () => onClose()
  );
  const { loading: makeUserLoading, fn: makeUserFN } = useServerAction(
    changeRole,
    { userId, role: "USER" },
    () => onClose()
  );
  const { loading: deleteAdminLoading, fn: deleteAdminFN } = useServerAction(
    deleteAdmin,
    userId,
    () => onClose()
  );

  const content = (
    <div className="popContainer w-[150px] min-h-[100px] flex flex-col justify-center items-center">
      {makeAdminLoading || makeUserLoading || deleteAdminLoading ? (
        <Loader height={20} width={20} />
      ) : (
        <>
          <CustomButton
            title={
              roll === "ADMIN" ? (
                <div className="flex items-center gap-2 text-darkBlue">
                  <CircleCheck />
                  <p>ADMIN</p>
                </div>
              ) : (
                "ADMIN"
              )
            }
            classNames="popButton hoverable"
            disabled={
              roll === "ADMIN" ||
              makeAdminLoading ||
              makeUserLoading ||
              deleteAdminLoading
            }
            onClick={() => makeAdminFN()}
          />
          <CustomButton
            title={
              roll === "USER" ? (
                <div className="flex items-center gap-2 text-darkBlue">
                  <CircleCheck />
                  <p>USER</p>
                </div>
              ) : (
                "USER"
              )
            }
            classNames="popButton hoverable"
            disabled={
              roll === "USER" ||
              makeAdminLoading ||
              makeUserLoading ||
              deleteAdminLoading
            }
            onClick={() => makeUserFN()}
          />
          <div className="bg-gray-200 w-full h-[1px]" />
          <CustomButton
            title="Delete"
            icon={<Trash />}
            classNames="popButton text-darkRose hover:bg-lightRose Transition"
            disabled={makeAdminLoading || makeUserLoading || deleteAdminLoading}
            onClick={() => deleteAdminFN()}
          />
        </>
      )}
    </div>
  );

  return (
    <div className="flex items-center gap-1">
      <Link href={`/account/admins/${userId}`} className="iconButton">
        <EyeOpen />
      </Link>
      {showMore && (
        <Popover
          overlayInnerStyle={{
            padding: "0",
          }}
          content={content}
          open={open}
          onOpenChange={onOpenChange}
          trigger="click"
          placement="leftTop"
        >
          <CustomButton
            type="button"
            icon={<MenuDots size={18} />}
            classNames="iconButton"
            onClick={onOpen}
          />
        </Popover>
      )}
    </div>
  );
};

export default AdminActions;
