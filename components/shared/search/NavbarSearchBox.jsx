"use client";

// react
import { useState } from "react";
// cmp
import CustomButton from "../CustomButton";
import CustomInput from "../form/CustomInput";
import { Close, Light, Search } from "@/components/icons/Icons";
import { Modal } from "antd";

const NavbarSearchBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalTitle = (
    <div className="flex items-center justify-between mb-3">
      <p>Search</p>
      <CustomButton
        icon={<Close size={15} />}
        classNames="iconButton"
        onClick={closeModal}
      />
    </div>
  );

  const modalStyles = {
    content: {
      padding: "20px",
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const modlaContent = (
    <div className="space-y-4">
      <div className="flex items-center gap-3 bg-lightGray p-2 rounded-lg">
        <Light wrapperClassName="text-darkGray" />
        <p className="text-p2">
          <span className="font-medium mr-1">Tip.</span>
          <span className="text-gray-500">
            Search by entering a keyword and pressing Enter
          </span>
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <CustomInput
          label="Search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );

  return (
    <>
      <Modal
        title={modalTitle}
        closeIcon={false}
        open={isModalOpen}
        onCancel={closeModal}
        footer={false}
        styles={modalStyles}
      >
        {modlaContent}
      </Modal>
      <CustomButton
        icon={<Search />}
        classNames="iconButton"
        onClick={openModal}
      />
    </>
  );
};

export default NavbarSearchBox;
