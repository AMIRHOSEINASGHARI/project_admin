// action
import { getProduct } from "@/actions/product";
// cmp
import Product from "./ui/Product";

const ProductDetailsPage = async ({ id }) => {
  try {
    const data = await getProduct(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return <Product product={data.product} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default ProductDetailsPage;
