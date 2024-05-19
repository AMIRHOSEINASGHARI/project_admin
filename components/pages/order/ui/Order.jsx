// cmp
import { Document, LeftAngle, ShoppingCart } from "@/components/icons/Icons";
import DetailedBox from "@/components/shared/layout/DetailedBox";
import OrderInformationTable from "./OrderInformationTable";
import CheckoutTable from "./CheckoutTable";
import CustomLink from "@/components/shared/CustomLink";

const Order = ({ order }) => {
  return (
    <div className="flex flex-col gap-5">
      <CustomLink
        icon={<LeftAngle size={10} />}
        title="Back"
        href="/orders"
        className="backLink w-fit"
      />
      <DetailedBox
        title="Order Information"
        icon={
          <Document wrapperClassName="cardShadow rounded-xl p-3" size={20} />
        }
        children={
          <OrderInformationTable
            address={JSON.parse(JSON.stringify(order?.deliveryAddress))}
            customer={JSON.parse(JSON.stringify(order?.userId))}
            date={JSON.parse(JSON.stringify(order?.createdAt))}
            paymentMethod={JSON.parse(JSON.stringify(order?.paymentMethod))}
            status={JSON.parse(JSON.stringify(order?.status))}
          />
        }
      />
      <DetailedBox
        title="Checkout Summary"
        icon={
          <ShoppingCart
            wrapperClassName="cardShadow rounded-xl p-3"
            size={20}
          />
        }
        children={
          <CheckoutTable
            items={JSON.parse(JSON.stringify(order?.items))}
            summary={JSON.parse(JSON.stringify(order?.summary))}
          />
        }
      />
    </div>
  );
};

export default Order;
