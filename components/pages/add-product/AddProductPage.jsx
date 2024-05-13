"use client";

// react
import { useState } from "react";
// cmp
import ProductForm from "@/components/shared/form/ProductForm";

const AddProductPage = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    stock: "",
    category: "",
    brand: "",
    price: "",
    discount: "",
    keywords: [],
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <ProductForm
      type="create"
      form={form}
      setForm={setForm}
      onChange={onChange}
    />
  );
};

export default AddProductPage;
