"use client";

// react
import { useState } from "react";
// cmp
import { Edit } from "@/components/icons/Icons";
import CustomButton from "@/components/shared/CustomButton";
import TaskForm from "./TaskForm";

const EditTask = ({ id, session }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomButton
        type="button"
        icon={<Edit size={15} />}
        classNames="rounded-full w-[35px] h-[35px] flex items-center justify-center hoverable"
        onClick={openModal}
      />
      <TaskForm
        type="create"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        closeModal={closeModal}
        taskData={null}
        session={session}
      />
    </>
  );
};

export default EditTask;
