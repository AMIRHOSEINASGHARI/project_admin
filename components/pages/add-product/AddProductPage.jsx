"use client";

// react
import { useState } from "react";
// cmp
import ProductForm from "@/components/shared/form/ProductForm";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { addProductPageBread } from "@/constants/breadcrumpItems";

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
    <>
      <PageHeading title="Create New Product" />
      <CustomBreadcrumb items={addProductPageBread} />
      <ProductForm
        type="create"
        form={form}
        setForm={setForm}
        onChange={onChange}
      />
    </>
  );
};

export default AddProductPage;
