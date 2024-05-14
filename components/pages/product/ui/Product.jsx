import ProductActions from "./ProductActions";
import ProductInformation from "./ProductInformation";

const Product = ({ product }) => {
  return (
    <div>
      <ProductActions id={product?._id} />
      <ProductInformation info={product} />
    </div>
  );
};

export default Product;
