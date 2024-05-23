"use client";

// react
import { useState } from "react";
// components
import CustomInput from "@/components/shared/form/CustomInput";

const ProductsFilter = () => {
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({
    has_selling_stock: false,
    sort: "",
    category: "",
    has_discount: "",
  });

  //   TODO: submit form and change handler
  const onSubmit = (e) => {
    e.preventDefault();
  };

  //   TODO: use CustomSelect cmp to filter products

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
      </div>
    </>
  );
};

export default ProductsFilter;
