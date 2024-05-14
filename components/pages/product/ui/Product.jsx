import ProductActions from "./ProductActions";

const Product = ({ product }) => {
  return (
    <div>
      <ProductActions id={product?._id} />
    </div>
  );
};

export default Product;
