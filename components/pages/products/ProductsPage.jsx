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
import ProductsFilter from "./ui/ProductsFilter";
import LoaderBar from "@/components/shared/LoaderBar";

const ProductsPage = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const category = searchParams?.category || "";
  const stock = searchParams?.stock || "";
  const discount = searchParams?.discount || "";
  const sort = searchParams?.sort || "";
  const published = searchParams?.published || "";

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
          key={search + page + category + stock + discount + sort + published}
          fallback={<LoaderBar />}
        >
          <ProductsOverview searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
};

export default ProductsPage;
