import OrderDetailsPage from "@/components/pages/order/OrderDetailsPage";

const Order = ({ params }) => {
  return <OrderDetailsPage id={params.id} />;
};

export default Order;
