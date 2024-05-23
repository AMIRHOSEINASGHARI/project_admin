// react
import { useState } from "react";
// next
import { useRouter } from "next/navigation";
// utils
import { uploadImage } from "@/utils/functions";
// actions
import { createProduct } from "@/actions/product";
// constants
import { categories } from "@/constants";
// cmp
import { Switch } from "antd";
import DetailedBox from "../layout/DetailedBox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomTextarea from "./CustomTextarea";
import KeywordsSelection from "./KeywordSelection";
import UploadImage from "./UploadImage";
import CustomButton from "../CustomButton";
import toast from "react-hot-toast";
import Loader from "../Loader";

const ProductForm = ({ type, form, setForm, onChange }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
        options={categories.map((c) => c.query)}
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

  const create = async () => {
    if (
      !form.title ||
      !form.description ||
      !form.image ||
      !form.price ||
      !form.stock ||
      !form.category ||
      !form.brand ||
      form.keywords.length === 0
    ) {
      toast.error("Fill all fields!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Product Created!");
      router.push("/products");
    }, 1000);

    // const uploadResult = await uploadImage(form.image[0]);

    // const result = await createProduct({
    //   ...form,
    //   image: uploadResult.imageUrl,
    // });

    // setLoading(false);

    // if (result.code !== 200) {
    //   toast.error(result.message);
    // } else {
    //   toast.success(result.message);
    //   router.push("/products");
    // }
  };

  return (
    <div className="space-y-8">
      <DetailedBox
        title="Basic Details"
        subtitle="Title, description, image"
        content={basicDetails}
      />
      <DetailedBox
        title="Properties"
        subtitle="Price, Stock, Discount, ..."
        content={properties}
      />
      <DetailedBox title="Keywords" content={keywordSelection} />
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
          classNames={`${
            loading ? "bg-lightGray" : "bg-dark1 text-white"
          } flex items-center justify-center w-[150px] h-[50px] rounded-btn text-p1 font-bold`}
          type="button"
          disabled={loading}
          isLoading={loading}
          onClick={() => create()}
          title={type === "create" ? "Create Product" : "Edit Product"}
        />
      </div>
    </div>
  );
};

export default ProductForm;
