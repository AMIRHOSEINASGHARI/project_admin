// react
import { Suspense } from "react";
// constants
import { ordersPageBread } from "@/constants/breadcrumpItems";
// cmp
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import OrdersBox from "./ui/OrdersBox";
import LoaderBar from "@/components/shared/LoaderBar";

const OrdersPage = async () => {
  return (
    <>
      <PageHeading title="Orders List" />
      <CustomBreadcrumb items={ordersPageBread} />
      <Suspense fallback={<LoaderBar />}>
        <OrdersBox />
      </Suspense>
    </>
  );
};

export default OrdersPage;
