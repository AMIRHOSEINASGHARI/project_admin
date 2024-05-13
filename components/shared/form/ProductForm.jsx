// cmp
import { Switch } from "antd";
import DetailedBox from "../layout/DetailedBox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomTextarea from "./CustomTextarea";
import KeywordsSelection from "./KeywordSelection";
import UploadImage from "./UploadImage";
import CustomButton from "../CustomButton";

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

  const properties = (
    <div className="flex flex-wrap gap-box w-full h-full">
      <CustomInput
        type="number"
        name="price"
        value={form.price}
        label="$ Price"
        onChange={onChange}
        min={0}
        wrapperClassName="flex flex-1 xl:min-w-[400px] min-w-[200px]"
      />
      <CustomInput
        type="number"
        name="stock"
        value={form.stock}
        label="Stock"
        onChange={onChange}
        min={0}
        wrapperClassName="flex flex-1 xl:min-w-[400px] min-w-[200px]"
      />
      <CustomInput
        type="number"
        name="discount"
        value={form.discount}
        label="% Discount"
        onChange={onChange}
        min={0}
        wrapperClassName="flex flex-1 xl:min-w-[400px] min-w-[200px]"
      />
      <CustomSelect
        name="category"
        value={form.category}
        label="Category"
        onChange={onChange}
        wrapperClassName="flex flex-1 xl:min-w-[400px] min-w-[200px]"
      />
      <CustomInput
        type="text"
        name="brand"
        value={form.brand}
        label="Brand Name"
        onChange={onChange}
        min={0}
        wrapperClassName="flex flex-1 xl:min-w-[400px] min-w-[200px]"
      />
    </div>
  );

  const keywordSelection = (
    <div className="w-full h-full">
      <KeywordsSelection form={form} setForm={setForm} />
    </div>
  );

  return (
    <div className="space-y-8">
      <DetailedBox
        title="Basic Details"
        subtitle="Title, description, image"
        children={basicDetails}
      />
      <DetailedBox
        title="Properties"
        subtitle="Price, Stock, Discount, ..."
        children={properties}
      />
      <DetailedBox title="Keywords" children={keywordSelection} />
      <div className="flex items-center justify-end gap-10">
        <div className="flex items-center gap-2">
          <Switch
            id="publish"
            defaultChecked
            onChange={(checked) => {
              setForm({ ...form, published: checked });
            }}
            value={form.published}
            name="published"
          />
          <label htmlFor="publish" className="text-p1">
            Publish
          </label>
        </div>
        <CustomButton
          classNames="bg-dark1 flex items-center justify-center text-white w-[150px] h-[50px] rounded-btn text-p1 font-bold"
          type="button"
          title={<p>{type === "create" ? "Create Product" : "Edit Product"}</p>}
        />
      </div>
    </div>
  );
};

export default ProductForm;
