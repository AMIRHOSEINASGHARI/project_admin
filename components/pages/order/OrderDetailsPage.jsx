// react
import { Suspense } from "react";
// cmp
import Order from "./ui/Order";
import LoaderBar from "@/components/shared/LoaderBar";

const OrderDetailsPage = async ({ id }) => {
  return (
    <Suspense fallback={<LoaderBar />}>
      <Order id={id} />
    </Suspense>
  );
};

export default OrderDetailsPage;
