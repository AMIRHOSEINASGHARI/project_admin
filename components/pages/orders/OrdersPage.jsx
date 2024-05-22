// actions
import { getOrders } from "@/actions/order";
// constants
import { ordersPageBread } from "@/constants/breadcrumpItems";
// cmp
import OrdersList from "./ui/OrdersList";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const OrdersPage = async () => {
  try {
    const data = await getOrders();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <>
        <PageHeading title="Orders List" />
        <CustomBreadcrumb items={ordersPageBread} />
        <div className="cardShadow3 rounded-2xl border overflow-hidden">
          <OrdersList orders={JSON.parse(JSON.stringify(data.orders))} />
        </div>
      </>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default OrdersPage;
