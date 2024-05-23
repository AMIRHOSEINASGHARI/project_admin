"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
// constants
import { images } from "@/constants";
// cmp
import CustomInput from "@/components/shared/form/CustomInput";
import CustomTextarea from "@/components/shared/form/CustomTextarea";
import CustomButton from "@/components/shared/CustomButton";
import { CircleClose } from "@/components/icons/Icons";
import { DatePicker, Modal } from "antd";
import moment from "moment";

const TaskForm = ({ type, taskData, isModalOpen, closeModal, session }) => {
  const initialFormState = {
    title: taskData?.title || "",
    description: taskData?.description || "",
    status: taskData?.status || "",
    dueDate: taskData?.dueDate || "",
  };

  const [form, setForm] = useState(initialFormState);

  const modalTitle = (
    <div className="flex items-center justify-between border-b pb-3 mb-5">
      <p className="text-p1 font-medium">
        {type === "create" ? "Create New Task" : "Edit Task"}
      </p>
      <CustomButton
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

  const onCancel = () => {
    closeModal();
    setForm(initialFormState);
  };
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dateChange = (date) => {
    setForm({
      ...form,
      dueDate: date?.$d || "",
    });
  };

  return (
    <Modal
      title={modalTitle}
      closeIcon={false}
      open={isModalOpen}
      onCancel={onCancel}
      footer={false}
      styles={modalStyles}
    >
      <form className="space-y-5">
        <CustomInput
          type="text"
          label="Title"
          name="title"
          onChange={onChange}
          value={form.title}
        />
        <CustomTextarea
          label="Description"
          name="description"
          onChange={onChange}
          value={form.description}
        />
        <div className="space-y-2">
          <p className="font-medium text-p1">Created by</p>
          <div className="flex items-center gap-3">
            <Image
              src={
                taskData
                  ? taskData?.createdBy?.avatar || images.person
                  : session?.avatar || images.person
              }
              width={100}
              height={100}
              alt="creator"
              priority
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="font-medium text-p1">
              {taskData ? taskData?.createdBy?.username : session?.username}
            </p>
          </div>
        </div>
        <hr />
        <div className="space-y-2">
          <p className="font-medium text-p1">Due Date</p>
          <div className="flex items-center gap-4">
            <DatePicker onChange={dateChange} />
            {form.dueDate && (
              <p className="capitalize">{moment(form.dueDate).fromNow()}</p>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default TaskForm;
