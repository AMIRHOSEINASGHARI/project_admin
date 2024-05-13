// cmp
import DetailedBox from "../layout/DetailedBox";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import UploadImage from "./UploadImage";

const ProductForm = ({ type, form, setForm, onChange }) => {
  const basicDetails = (
    <div className="flex flex-col gap-box w-full h-full">
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
      <UploadImage form={form} setForm={setForm} />
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
