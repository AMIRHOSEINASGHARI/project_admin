import React from "react";
import DetailedBox from "../layout/DetailedBox";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";

const ProductForm = ({ type, form, setForm, onChange }) => {
  const basicDetails = (
    <div className="flex flex-col gap-box w-full">
      <CustomInput
        type="text"
        name="title"
        label="Title"
        value={form.title}
        onChange={onChange}
      />
      <CustomTextarea
        name="description"
        label="Description"
        value={form.description}
        onChange={onChange}
      />
    </div>
  );

  return (
    <div>
      <DetailedBox
        title="Basic Details"
        subtitle="Title, description, image"
        children={basicDetails}
      />
    </div>
  );
};

export default ProductForm;
