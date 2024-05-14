// action
import { getProduct } from "@/actions/product";

const ProductDetailsPage = async ({ id }) => {
  try {
    const data = await getProduct(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return "product";
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default ProductDetailsPage;
