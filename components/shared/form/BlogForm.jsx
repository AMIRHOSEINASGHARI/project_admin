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
import { uploadImage } from "@/utils/functions";
import { createBlog } from "@/actions/blog";
import toast from "react-hot-toast";

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

  const create = async () => {
    if (
      !form.title ||
      !form.description ||
      !form.image ||
      form.keywords.length === 0
    ) {
      toast.error("Fill all fields!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Blog Created!");
      router.push("/blogs");
    }, 1000);

    // const uploadResult = await uploadImage(form.image[0]);

    // const result = await createBlog({
    //   ...form,
    //   image: uploadResult.imageUrl,
    // });

    // setLoading(false);

    // if (result.code !== 200) {
    //   toast.error(result.message);
    // } else {
    //   toast.success(result.message);
    //   router.push("/blogs");
    // }
  };

  return (
    <div className="space-y-8">
      <DetailedBox
        title="Basic Details"
        subtitle="Title, description, image"
        content={basicDetails}
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
          onClick={() => create()}
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
