"use client";

// react
import { useEffect, useState } from "react";
// next
import Image from "next/image";
// actions
import { createTask, editTask } from "@/actions/task";
// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchTask } from "@/services/queries";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { images } from "@/constants";
// cmp
import { CircleClose } from "@/components/icons/Icons";
import CustomInput from "@/components/shared/form/CustomInput";
import CustomTextarea from "@/components/shared/form/CustomTextarea";
import CustomButton from "@/components/shared/CustomButton";
import CustomSelect from "@/components/shared/form/CustomSelect";
import Loader from "@/components/shared/Loader";
import toast from "react-hot-toast";
import moment from "moment";
import { DatePicker, Modal } from "antd";

const TaskForm = ({ type, taskID, isModalOpen, closeModal, session }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Todo",
    dueDate: "",
  });

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["tasks", taskID],
    queryFn: fetchTask,
    staleTime: 0,
    cacheTime: 0,
    enabled: false,
    onSuccess: (info) =>
      setForm({
        title: info.task.title,
        description: info.task.description,
        status: info.task.status,
        dueDate: info.task.dueDate,
      }),
  });

  useEffect(() => {
    if (!!taskID && isModalOpen) {
      refetch();
    }
  }, [taskID]);

  const onCancel = () => {
    closeModal();
    setForm({
      title: taskID ? data?.task?.title : "",
      description: taskID ? data?.task?.description : "",
      status: taskID ? data?.task?.status : "Todo",
      dueDate: taskID ? data?.task?.dueDate : "",
    });
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

  const { loading: createLoading, fn: createFn } = useServerAction(
    createTask,
    form,
    () => onCancel()
  );
  const { loading: editLoading, fn: editFn } = useServerAction(
    editTask,
    { ...form, id: taskID },
    () => onCancel()
  );

  const modalTitle = (
    <div className="flex items-center justify-between border-b pb-3 mb-5">
      <p className="text-p1 font-medium">
        {type === "create" ? "Create New Task" : "Edit Task"}
      </p>
      <CustomButton
        icon={<CircleClose />}
        classNames="hoverable"
        onClick={closeModal}
        disabled={createLoading}
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

    if (type === "create") {
      if (
        form.title.length === 0 ||
        form.status.length === 0 ||
        form.dueDate.length === 0
      ) {
        toast.error("Fill all Fields");
        return;
      }

      createFn();
    }

    if (type === "edit") {
      if (
        form.title.length === 0 ||
        form.status.length === 0 ||
        form.dueDate.length === 0
      ) {
        toast.error("Fill all Fields");
        return;
      }

      editFn();
    }
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
      {isFetching ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <Loader />
        </div>
      ) : isError ? (
        <p>Error!</p>
      ) : (
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
                  data
                    ? data?.task?.createdBy?.avatar || images.person
                    : session?.avatar || images.person
                }
                width={100}
                height={100}
                alt="creator"
                priority
                className="w-[40px] h-[40px] rounded-full"
              />
              <p className="font-medium text-p1">
                {data ? data?.task?.createdBy?.username : session?.username}
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
              disabled={createLoading || editLoading}
              onClick={onCancel}
            />
            <CustomButton
              type="submit"
              title={
                createLoading || editLoading ? (
                  <Loader height={15} width={15} />
                ) : (
                  "Submit"
                )
              }
              disabled={createLoading || editLoading}
              classNames={`font-medium p-btn rounded-btn ${
                createLoading || editLoading
                  ? "bg-lightGray"
                  : "bg-dark1 text-white"
              }`}
            />
          </div>
        </form>
      )}
    </Modal>
  );
};

export default TaskForm;
