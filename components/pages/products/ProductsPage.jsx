// actions
import { getProducts } from "@/actions/product";
import ProductsList from "./ui/ProductsList";
import ProductsFilter from "./ui/ProductsFilter";

const ProductsPage = async ({ searchParams }) => {
  try {
    const data = await getProducts(searchParams);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    if (data.products?.length === 0) {
      return <p>No Products!</p>;
    }
    return (
      <div className="cardShadow3 rounded-2xl border overflow-hidden">
        <ProductsFilter />
        <ProductsList products={JSON.parse(JSON.stringify(data.products))} />
      </div>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default ProductsPage;
