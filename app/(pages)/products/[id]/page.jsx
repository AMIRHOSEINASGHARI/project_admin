// components
import ProductDetailsPage from "@/components/pages/product/ProductDetailsPage";

export const dynamic = "force-dynamic";

const Product = ({ params }) => {
  return <ProductDetailsPage id={params.id} />;
};

export default Product;
