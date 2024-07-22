// actions
import { getOrders } from "@/actions/order";
// cmp
import OrdersTable from "./OrdersTable";

const OrdersBox = async () => {
  const data = await getOrders();

  return <OrdersTable orders={JSON.parse(JSON.stringify(data.orders))} />;
};

export default OrdersBox;
