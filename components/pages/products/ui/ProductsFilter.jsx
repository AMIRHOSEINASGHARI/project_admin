"use client";

// react
import { useState } from "react";
// custome hooks
import { useSetSearchParams } from "@/hooks/setSearchQuery";
// hooks
import { useDebouncedCallback } from "use-debounce";
// components
import CustomInput from "@/components/shared/form/CustomInput";

const ProductsFilter = () => {
  const { searchParams, setSearchParams } = useSetSearchParams();
  const [form, setForm] = useState({
    has_selling_stock: false,
    sort: "",
    category: "",
    has_discount: "",
  });

  const handleSearchQuery = useDebouncedCallback((query) => {
    setSearchParams("search", query);
  }, 300);

  //   TODO: use CustomSelect cmp to filter products

  return (
    <>
      <div className="p-4 flex flex-col xl:flex-row items-center gap-4 w-full">
        <div className="w-full">
          <CustomInput
            type="text"
            label="Search"
            wrapperClassName="w-full"
            defaultValue={searchParams.get("search")?.toString()}
            onChange={(e) => {
              handleSearchQuery(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;
