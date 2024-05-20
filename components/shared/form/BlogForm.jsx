// react
import { useState } from "react";
// next
import { useRouter } from "next/navigation";
// cmp
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import UploadImage from "./UploadImage";
import DetailedBox from "../layout/DetailedBox";
import KeywordsSelection from "./KeywordSelection";
import CustomButton from "../CustomButton";
import Loader from "../Loader";
import { Switch } from "antd";

const BlogForm = ({ type, form, setForm, onChange }) => {
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
          classNames={`${
            loading ? "bg-lightGray" : "bg-dark1 text-white"
          } flex items-center justify-center w-[150px] h-[50px] rounded-btn text-p1 font-bold`}
          type="button"
          disabled={loading}
          title={
            loading ? (
              <Loader width={15} height={15} />
            ) : (
              <p>{type === "create" ? "Create Blog" : "Edit Blog"}</p>
            )
          }
        />
      </div>
    </div>
  );
};

export default BlogForm;
