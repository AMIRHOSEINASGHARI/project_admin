"use client";

// react
import { useState } from "react";
// cmp
import BlogForm from "@/components/shared/form/BlogForm";

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
    <BlogForm type="create" form={form} setForm={setForm} onChange={onChange} />
  );
};

export default AddBlogPage;
