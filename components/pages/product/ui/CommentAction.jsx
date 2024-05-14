"use client";

// react
import { useState } from "react";
// hooks
import useServerAction from "@/hooks/callServerAction";
// actions
import {
  changeCommentAnswerStatus,
  deleteComment,
  publishCommentStatus,
} from "@/actions/comment";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import {
  CircleClose,
  Document,
  Edit,
  EyeOpen,
  MenuDots,
  Trash,
} from "@/components/icons/Icons";
import CustomButton from "@/components/shared/CustomButton";
import Loader from "@/components/shared/Loader";
import CustomTextarea from "@/components/shared/form/CustomTextarea";
import { Modal, Popover } from "antd";

const CommentAction = ({ _id, answer, status, published }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [value, setValue] = useState(answer);

  //   USE SERVER ACTION HOOK : START   //
  const { loading: publishLoading, fn: publish } = useServerAction(
    publishCommentStatus,
    {
      _id,
      action: "publish",
    },
    () => closePopover()
  );
  const { loading: draftLoading, fn: draft } = useServerAction(
    publishCommentStatus,
    {
      _id,
      action: "draft",
    },
    () => closePopover()
  );
  const { loading: deleteLoading, fn: deletingComment } = useServerAction(
    deleteComment,
    { _id },
    () => closePopover()
  );
  const { loading: answerLoading, fn: changeAnswer } = useServerAction(
    changeCommentAnswerStatus,
    { _id, value },
    () => closeModal()
  );

  //   MODAL FUNCTION's : START   //
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modalTitle = (
    <div className="flex items-center justify-between border-b pb-3">
      <p className="text-p1 font-medium">#{shorterText(_id, 15)}</p>
      <CustomButton
        disabled={answerLoading}
        icon={<CircleClose />}
        classNames="hoverable"
        onClick={closeModal}
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
  const onSubmitModal = (e) => {
    e.preventDefault();

    if (value === answer) return;

    changeAnswer();
  };
  const modalContent = (
    <form className="space-y-5" onSubmit={onSubmitModal}>
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
          disabled={answerLoading}
          title="Cancel"
          type="button"
          onClick={closeModal}
          classNames="border p-btn rounded-btn text-p1 hoverable"
        />
        <CustomButton
          disabled={answerLoading}
          title={answerLoading ? <Loader width={15} height={15} /> : "Submit"}
          type="submit"
          classNames={`p-btn rounded-btn text-p1 ${
            answerLoading ? "bg-lightGray" : "bg-darkBlue text-white"
          }`}
        />
      </div>
    </form>
  );

  //   POPOVER FUNCTION's : START   //
  const popoverContent = (
    <div className="p-1 flex flex-col gap-1 w-[150px]">
      <CustomButton
        onClick={() => publish()}
        disabled={published || publishLoading}
        classNames="flex justify-center w-full"
        title={
          publishLoading ? (
            <Loader width={15} height={15} className="py-1" />
          ) : (
            <div
              className={`flex w-full items-center hoverable py-1 px-2 gap-4 rounded-btn ${
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
            <Loader width={15} height={15} className="py-1" />
          ) : (
            <div
              className={`flex w-full items-center hoverable py-1 px-2 gap-4 rounded-btn ${
                !published && "bg-gray-200"
              }`}
            >
              <Document />
              <p>Draft</p>
            </div>
          )
        }
      />
      <hr />
      <CustomButton
        onClick={() => deletingComment()}
        disabled={deleteLoading || publishLoading || draftLoading}
        classNames="flex justify-center w-full"
        title={
          deleteLoading ? (
            <Loader width={15} height={15} className="py-1" />
          ) : (
            <div
              className={`flex w-full items-center hoverable py-1 px-2 gap-4 rounded-btn hover:bg-lightRose text-darkRose`}
            >
              <Trash />
              <p>Delete</p>
            </div>
          )
        }
      />
    </div>
  );
  const closePopover = () => {
    setIsPopoverOpen(false);
  };
  const onOpenChange = (newOpen) => {
    setIsPopoverOpen(newOpen);
  };

  return (
    <div className="flex items-center gap-1">
      <CustomButton
        onClick={openModal}
        title={<Edit size={18} />}
        classNames="hoverable p-2 rounded-btn"
      />
      <Modal
        title={modalTitle}
        closeIcon={false}
        open={isModalOpen}
        onCancel={closeModal}
        footer={false}
        styles={modalStyles}
      >
        {modalContent}
      </Modal>
      <Popover
        open={isPopoverOpen}
        onOpenChange={onOpenChange}
        overlayInnerStyle={{
          padding: "0",
        }}
        content={popoverContent}
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
