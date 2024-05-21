// utils
import { shorterText } from "@/utils/functions";
// cmp
import { Document, LeftAngle, ShoppingCart } from "@/components/icons/Icons";
import DetailedBox from "@/components/shared/layout/DetailedBox";
import OrderInformationTable from "./OrderInformationTable";
import CheckoutTable from "./CheckoutTable";
import CustomLink from "@/components/shared/CustomLink";
import moment from "moment";
import CustomBadge from "@/components/shared/CustomBadge";

const Order = ({ order }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <CustomLink
          icon={<LeftAngle size={13} className="text-darkGray" />}
          href="/orders"
          className="backLink w-fit h-fit"
        />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-h3 font-bold">
              Order #{shorterText(order._id, 5)}
            </h3>
            <CustomBadge
              condition={order.status === "Completed"}
              title={order.status}
            />
          </div>
          <p className="text-p2 text-darkGray">
            {moment(order.createdAt).format("LLL")}
          </p>
        </div>
      </div>
      <DetailedBox
        title="Order Information"
        icon={
          <Document wrapperClassName="cardShadow rounded-xl p-3" size={20} />
        }
        content={
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
        content={
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
