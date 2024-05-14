"use client";

// react
import { useState } from "react";
// components
import CustomInput from "@/components/shared/form/CustomInput";
import CustomSelect from "@/components/shared/form/CustomSelect";

const ProductsFilter = () => {
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({
    has_selling_stock: false,
    sort: "",
    category: "",
    has_discount: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   TODO: submit form and change handler
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="p-4 flex flex-col xl:flex-row items-center gap-4 w-full">
        <form onSubmit={onSubmit} className="w-full">
          <CustomInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            label="Search"
            wrapperClassName="w-full"
          />
        </form>
        <CustomSelect
          name="category"
          label="Category"
          value={form.category}
          onChange={changeHandler}
          wrapperClassName="w-full"
        >
          <option key="true" value="true">
            In Stock
          </option>
          <option key="false" value="false">
            Out of Stock
          </option>
        </CustomSelect>
        <CustomSelect
          name="price"
          value={form.sort}
          onChange={changeHandler}
          label="Sort"
          wrapperClassName="w-full"
        >
          <option key="expensive" value="Most Expensive">
            Most Expensive
          </option>
          <option key="cheapest" value="Cheapest">
            Cheapest
          </option>
        </CustomSelect>
        <CustomSelect
          name="discount"
          value={form.has_discount}
          onChange={changeHandler}
          label="Discount"
          wrapperClassName="w-full"
        >
          <option key="1" value="1">
            Has Discount
          </option>
          <option key="2" value="2">
            No Discount
          </option>
        </CustomSelect>
      </div>
    </>
  );
};

export default ProductsFilter;
