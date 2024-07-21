// react
import { Suspense } from "react";
// next
import Link from "next/link";
// constants
import { productsPageBread } from "@/constants/breadcrumpItems";
// cmp
import { LayerPlus } from "@/components/icons/Icons";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import ProductsOverview from "./ui/ProductsOverview";
import Loader from "@/components/shared/Loader";
import ProductsFilter from "./ui/ProductsFilter";

const ProductsPage = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <>
      <div className="flex justify-between gap-1">
        <PageHeading title="Products" />
        <Link
          href="/add-product"
          className="h-fit flex items-center gap-3 p-btn rounded-btn bg-dark1 text-white"
        >
          <LayerPlus />
          New
        </Link>
      </div>
      <CustomBreadcrumb items={productsPageBread} />
      <div className="cardShadow3 rounded-2xl border overflow-hidden">
        <ProductsFilter />
        <Suspense
          key={search + page}
          fallback={
            <div className="box w-full h-[400px] flex items-center justify-center">
              <Loader />
            </div>
          }
        >
          <ProductsOverview searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
};

export default ProductsPage;
