import ActiveTab from "./ActiveTab";
import ProductActions from "./ProductActions";
import ProductInformation from "./ProductInformation";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col gap-box">
      <ProductActions id={product?._id} />
      <ProductInformation info={product} />
      <ActiveTab
        comments={product?.comments}
        orders={product?.orders}
        likes={product?.likes}
      />
    </div>
  );
};

export default Product;
