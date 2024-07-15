// actions
import { getProducts } from "@/actions/product";
// cmp
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import ProductsPagination from "./ProductsPagination";

const ProductsOverview = async ({ searchParams }) => {
  const data = await getProducts(searchParams);

  if (data.code !== 200) {
    return <p>Error!</p>;
  }

  return (
    <div className="cardShadow3 rounded-2xl border overflow-hidden">
      <ProductsFilter />
      <ProductsList products={JSON.parse(JSON.stringify(data.products))} />
      <ProductsPagination
        totalProducts={data.totalProducts}
        totalProductsWithoutFilter={data.totalProductsWithoutFilter}
        totalPages={data.totalPages}
        searchParams={searchParams}
      />
    </div>
  );
};

export default ProductsOverview;
