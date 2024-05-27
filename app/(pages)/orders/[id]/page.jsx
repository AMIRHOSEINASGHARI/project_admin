import OrderDetailsPage from "@/components/pages/order/OrderDetailsPage";

export const dynamic = "force-dynamic";

const Order = ({ params }) => {
  return <OrderDetailsPage id={params.id} />;
};

export default Order;
