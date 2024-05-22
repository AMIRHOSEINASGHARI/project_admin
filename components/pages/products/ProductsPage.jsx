// actions
import { getProducts } from "@/actions/product";
// constants
import { productsPageBread } from "@/constants/breadcrumpItems";
// cmp
import ProductsList from "./ui/ProductsList";
import ProductsFilter from "./ui/ProductsFilter";
import ProductsPagination from "./ui/ProductsPagination";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const ProductsPage = async ({ searchParams }) => {
  try {
    const data = await getProducts(searchParams);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <>
        <PageHeading title="Products" />
        <CustomBreadcrumb items={productsPageBread} />
        {data.products?.length === 0 ? (
          <p>No Products!</p>
        ) : (
          <div className="cardShadow3 rounded-2xl border overflow-hidden">
            <ProductsFilter />
            <ProductsList
              products={JSON.parse(JSON.stringify(data.products))}
            />
            <ProductsPagination
              totalPages={data.totalPages}
              searchParams={searchParams}
            />
          </div>
        )}
      </>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default ProductsPage;
