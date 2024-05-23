"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
// actions
import { createTask } from "@/actions/task";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { images } from "@/constants";
// cmp
import CustomInput from "@/components/shared/form/CustomInput";
import CustomTextarea from "@/components/shared/form/CustomTextarea";
import CustomButton from "@/components/shared/CustomButton";
import { CircleClose } from "@/components/icons/Icons";
import { DatePicker, Modal } from "antd";
import moment from "moment";
import CustomSelect from "@/components/shared/form/CustomSelect";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";

const TaskForm = ({ type, taskData, isModalOpen, closeModal, session }) => {
  const initialFormState = {
    title: taskData?.title || "",
    description: taskData?.description || "",
    status: taskData?.status || "Todo",
    dueDate: taskData?.dueDate || "",
  };

  const [form, setForm] = useState(initialFormState);

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
  const { loading, fn } = useServerAction(createTask, form, () => onCancel());

  const modalTitle = (
    <div className="flex items-center justify-between border-b pb-3 mb-5">
      <p className="text-p1 font-medium">
        {type === "create" ? "Create New Task" : "Edit Task"}
      </p>
      <CustomButton
        icon={<CircleClose />}
        classNames="hoverable"
        onClick={closeModal}
        disabled={loading}
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

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      form.title.length === 0 ||
      form.status.length === 0 ||
      form.dueDate.length === 0
    ) {
      toast.error("Fill all Fields");
      return;
    }

    fn();
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
      <form className="space-y-5" onSubmit={onSubmit}>
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
        <CustomSelect
          label="Status"
          name="status"
          onChange={onChange}
          value={form.status}
          options={["Todo", "Progress", "Done"]}
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
        <hr />
        <div className="flex justify-end gap-3">
          <CustomButton
            type="button"
            title="Cancel"
            classNames="border p-btn rounded-btn hoverable"
            disabled={loading}
            onClick={onCancel}
          />
          <CustomButton
            type="submit"
            title={loading ? <Loader height={15} width={15} /> : "Submit"}
            disabled={loading}
            classNames={`font-medium p-btn rounded-btn ${
              loading ? "bg-lightGray" : "bg-dark1 text-white"
            }`}
          />
        </div>
      </form>
    </Modal>
  );
};

export default TaskForm;
