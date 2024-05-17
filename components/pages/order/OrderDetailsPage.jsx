// actions
import { getOrder } from "@/actions/order";
// cmp
import Order from "./ui/Order";

const OrderDetailsPage = async ({ id }) => {
  try {
    const data = await getOrder(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return <Order order={data.order} />;
  } catch (error) {
    <p>Error!</p>;
  }
};

export default OrderDetailsPage;
