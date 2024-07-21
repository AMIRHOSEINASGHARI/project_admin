"use client";

// react
import { useEffect, useState } from "react";
// next
import { usePathname, useRouter } from "next/navigation";
// custome hooks
import { useSetSearchParams } from "@/hooks/setSearchQuery";
// hooks
import { useDebouncedCallback } from "use-debounce";
// components
import CustomInput from "@/components/shared/form/CustomInput";
import CustomButton from "@/components/shared/CustomButton";
import { CircleClose, Trash } from "@/components/icons/Icons";

const ProductsFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { searchParams, setSearchParams, params } = useSetSearchParams();
  const [filters, setFilters] = useState([]);
  const [form, setForm] = useState({
    has_selling_stock: false,
    sort: "",
    category: "",
    has_discount: "",
  });

  // using useDebouncedCallback hook to handle searching products
  const handleSearchQuery = useDebouncedCallback((query) => {
    setSearchParams("page", "1");
    setSearchParams("search", query);
  }, 300);

  // setting filters state to update UI with all available search params
  useEffect(() => {
    let paramsArray;

    paramsArray = !!!params.toString()
      ? []
      : params
          .toString()
          .split("&")
          .map((param) => param.split("="));

    setFilters(
      paramsArray.length === 0
        ? []
        : paramsArray.filter((param) => param[0] !== "page")
    );
  }, [searchParams]);

  const clearFilters = () => {
    params.delete("search");
    router.replace("/products");
    router.refresh("/products");
  };

  return (
    <div className="p-4">
      <div className="flex flex-col xl:flex-row items-center gap-4 w-full">
        <div className="w-full">
          <CustomInput
            type="text"
            label="Search"
            wrapperClassName="w-full"
            defaultValue={
              !!searchParams.get("search")?.toString()
                ? searchParams.get("search")?.toString()
                : ""
            }
            onChange={(e) => {
              handleSearchQuery(e.target.value);
            }}
          />
        </div>
      </div>
      {filters.length !== 0 && (
        <div className="flex gap-2 items-center flex-wrap mt-3">
          {filters.map((filter) => {
            return (
              <div
                key={filter[0]}
                className="flex items-center gap-2 p-2 rounded-btn border"
              >
                <span className="capitalize text-p2">{filter[0]}:</span>
                <CustomButton
                  type="button"
                  classNames="rounded-btn flex items-center gap-btn bg-dark1 hover:bg-dark2 Transition py-[2.5px] px-1.5 group"
                  title={
                    <>
                      <span className="text-lightGray text-p2">
                        {filter[1]}
                      </span>
                      <CircleClose
                        size={18}
                        className="text-darkGray group-hover:text-lightGray Transition"
                      />
                    </>
                  }
                />
              </div>
            );
          })}
          <CustomButton
            type="button"
            classNames="rounded-btn flex items-center gap-btn text-[#ff5630] hover:bg-lightOrange Transition p-2"
            title={<p className="text-p1 font-bold">Clear</p>}
            icon={<Trash />}
            onClick={clearFilters}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsFilter;
