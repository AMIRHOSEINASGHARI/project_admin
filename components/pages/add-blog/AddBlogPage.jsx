"use client";

// react
import { useState } from "react";
// constants
import { addBlogPageBread } from "@/constants/breadcrumpItems";
// cmp
import BlogForm from "@/components/shared/form/BlogForm";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const AddBlogPage = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    keywords: [],
    published: false,
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <PageHeading title="Create New Blog" />
      <CustomBreadcrumb items={addBlogPageBread} />
      <BlogForm
        type="create"
        form={form}
        setForm={setForm}
        onChange={onChange}
      />
    </>
  );
};

export default AddBlogPage;
