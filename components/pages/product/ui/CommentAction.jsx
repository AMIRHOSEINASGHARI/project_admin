"use client";

// react
import { useState } from "react";
// hooks
import useServerAction from "@/hooks/callServerAction";
// actions
import { publishCommentStatus } from "@/actions/comment";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import {
  CircleClose,
  Close,
  Document,
  Edit,
  EyeOpen,
  MenuDots,
} from "@/components/icons/Icons";
import CustomButton from "@/components/shared/CustomButton";
import Loader from "@/components/shared/Loader";
import { Modal, Popover } from "antd";
import CustomTextarea from "@/components/shared/form/CustomTextarea";

const CommentAction = ({ _id, answer, status, published }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(answer);

  const { loading: publishLoading, fn: publish } = useServerAction(
    publishCommentStatus,
    {
      _id,
      action: "publish",
    }
  );

  const { loading: draftLoading, fn: draft } = useServerAction(
    publishCommentStatus,
    {
      _id,
      action: "draft",
    }
  );

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const content = (
    <div className="p-2 flex flex-col gap-1 w-[150px]">
      <CustomButton
        onClick={() => publish()}
        disabled={published || publishLoading}
        classNames="flex justify-center w-full"
        title={
          publishLoading ? (
            <Loader width={15} height={15} />
          ) : (
            <div
              className={`flex w-full items-center hoverable p-btn gap-btn rounded-btn ${
                published && "bg-gray-200"
              }`}
            >
              <EyeOpen />
              <p>Published</p>
            </div>
          )
        }
      />
      <CustomButton
        onClick={() => draft()}
        disabled={!published || draftLoading}
        classNames="flex justify-center w-full"
        title={
          draftLoading ? (
            <Loader width={15} height={15} />
          ) : (
            <div
              className={`flex w-full items-center hoverable p-btn gap-btn rounded-btn ${
                !published && "bg-gray-200"
              }`}
            >
              <Document />
              <p>Draft</p>
            </div>
          )
        }
      />
    </div>
  );

  const modalTitle = (
    <div className="flex items-center justify-between border-b pb-3">
      <p className="text-p1 font-medium">#{shorterText(_id, 15)}</p>
      <CustomButton
        icon={<CircleClose />}
        classNames="hoverable"
        onClick={handleClose}
      />
    </div>
  );

  const modalStyles = {
    content: {
      padding: "20px",
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
  };

  const modalContent = (
    <div className="space-y-5">
      <p
        className={`py-1 px-2 rounded-btn text-p1 font-bold w-fit ${
          status === "Not-Answered"
            ? "bg-lightOrange text-darkOrange"
            : "bg-lightGreen text-darkGreen"
        }`}
      >
        {status}
      </p>
      <CustomTextarea
        label="Your Answer"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="w-full flex justify-end gap-2">
        <CustomButton
          title="Cancel"
          onClick={handleClose}
          classNames="border p-btn rounded-btn text-p1 hoverable"
        />
        <CustomButton
          title="Submit"
          onClick={handleClose}
          classNames="bg-darkBlue text-white p-btn rounded-btn text-p1"
        />
      </div>
    </div>
  );

  return (
    <div className="flex items-center gap-1">
      <CustomButton
        onClick={showModal}
        title={<Edit size={18} />}
        classNames="hoverable p-2 rounded-btn"
      />
      <Modal
        title={modalTitle}
        closeIcon={false}
        open={isModalOpen}
        onCancel={handleClose}
        footer={false}
        styles={modalStyles}
      >
        {modalContent}
      </Modal>
      <Popover
        overlayInnerStyle={{
          padding: "0",
        }}
        content={content}
        trigger="click"
        placement="leftTop"
      >
        <CustomButton
          type="button"
          icon={<MenuDots size={18} />}
          classNames="hoverable p-2 rounded-btn"
        />
      </Popover>
    </div>
  );
};

export default CommentAction;
