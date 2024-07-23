// next
import { notFound } from "next/navigation";
// action
import { getProduct } from "@/actions/product";
// cmp
import Product from "./ui/Product";

const ProductDetailsPage = async ({ id }) => {
  const data = await getProduct(id);

  if (!data.product) {
    notFound();
  }

  return <Product product={data.product} />;
};

export default ProductDetailsPage;
