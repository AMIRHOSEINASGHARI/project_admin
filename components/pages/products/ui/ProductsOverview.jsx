// actions
import { getProducts } from "@/actions/product";
// cmp
import ProductsList from "./ProductsList";
import ProductsPagination from "./ProductsPagination";

const ProductsOverview = async ({ searchParams }) => {
  const data = await getProducts(searchParams);

  if (data.code !== 200) {
    return <p>Error!</p>;
  }

  return (
    <>
      <ProductsList
        products={JSON.parse(JSON.stringify(data.products))}
        totalProducts={JSON.parse(JSON.stringify(data.totalProducts))}
      />
      <ProductsPagination
        totalProducts={data.totalProducts}
        totalProductsWithoutFilter={data.totalProductsWithoutFilter}
        totalPages={data.totalPages}
        searchParams={searchParams}
      />
    </>
  );
};

export default ProductsOverview;
