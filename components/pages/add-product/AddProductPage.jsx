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
    stock: 0,
    category: "",
    brand: "",
    price: 0,
    discount: 0,
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
    <ProductForm
      type="create"
      form={form}
      setForm={setForm}
      onChange={onChange}
    />
  );
};

export default AddProductPage;
