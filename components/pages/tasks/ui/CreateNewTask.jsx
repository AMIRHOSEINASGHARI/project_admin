"use client";

// cmp
import CustomButton from "@/components/shared/CustomButton";
import { AddFolder } from "@/components/icons/Icons";

const CreateNewTask = () => {
  return (
    <div className="w-full flex justify-end">
      <CustomButton
        icon={<AddFolder />}
        title="Create Task"
        classNames="bg-dark1 text-white rounded-btn py-2.5 px-5 flex items-center gap-3 font-medium"
      />
    </div>
  );
};

export default CreateNewTask;
