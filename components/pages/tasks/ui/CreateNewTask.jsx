"use client";

// react
import { useState } from "react";
// cmp
import { AddFolder } from "@/components/icons/Icons";
import CustomButton from "@/components/shared/CustomButton";
import TaskForm from "./TaskForm";

const CreateNewTask = ({ session }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full flex justify-end">
        <CustomButton
          icon={<AddFolder />}
          title="Create Task"
          classNames="bg-dark1 text-white rounded-btn py-2.5 px-5 flex items-center gap-3 font-medium"
          onClick={openModal}
        />
      </div>
      {isModalOpen && (
        <TaskForm
          type="create"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          closeModal={closeModal}
          taskID={null}
          session={session}
        />
      )}
    </>
  );
};

export default CreateNewTask;
