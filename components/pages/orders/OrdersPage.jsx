import { getOrders } from "@/actions/order";
import OrdersList from "./ui/OrdersList";

const OrdersPage = async () => {
  try {
    const data = await getOrders();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <div className="cardShadow3 rounded-2xl border overflow-hidden">
        <OrdersList orders={JSON.parse(JSON.stringify(data.orders))} />
      </div>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default OrdersPage;
