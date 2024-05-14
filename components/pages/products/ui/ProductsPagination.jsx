"use client";

// next
import { useRouter } from "next/navigation";
// components
import { LeftAngle, RightAngle } from "@/components/icons/Icons";

const ProductsPagination = ({ totalPages, searchParams }) => {
  const router = useRouter();

  const nextPage = () => {
    const search = new URLSearchParams(window.location.search);
    const newPage = Number(searchParams.page) + 1 || 2;

    search.set("page", String(newPage));

    const newPathName = `${window.location.pathname}?${search.toString()}`;
    router.push(newPathName);
  };

  const prevPage = () => {
    const search = new URLSearchParams(window.location.search);
    const newPage = Number(searchParams.page) - 1;

    search.set("page", String(newPage));

    const newPathName = `${window.location.pathname}?${search.toString()}`;
    router.push(newPathName);
  };

  return (
    <div className="flex items-center gap-2 w-full justify-end p-4">
      <p className="rounded-xl text-sm">
        {searchParams.page || 1} / {totalPages}
      </p>
      <button
        type="button"
        onClick={() => prevPage()}
        disabled={searchParams.page == "1" || searchParams.page === undefined}
        className={`${
          searchParams.page == "1" || searchParams.page === undefined
            ? "text-gray-400 cursor-not-allowed"
            : "text-black"
        } rounded-full hover:bg-lightGray p-3 Transition`}
      >
        <LeftAngle size={15} />
      </button>
      <button
        type="button"
        onClick={() => nextPage()}
        disabled={searchParams.page == String(totalPages) || totalPages === 1}
        className={`${
          searchParams.page == String(totalPages) || totalPages === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-black"
        } rounded-full hover:bg-lightGray p-3 Transition`}
      >
        <RightAngle size={15} />
      </button>
    </div>
  );
};

export default ProductsPagination;
