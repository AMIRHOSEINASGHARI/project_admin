// next
import Link from "next/link";
// constants
import { images } from "@/constants";
// cmp
import {
  CircleCheck,
  CircleClose,
  CreditCard,
  Date,
  Dollar,
  DollarBag,
  Location,
  Paypal,
  User,
} from "@/components/icons/Icons";
import { Avatar, Table } from "antd";
import moment from "moment";

const OrderInformationTable = ({
  customer,
  address,
  date,
  status,
  paymentMethod,
}) => {
  const dataSourse = [
    {
      key: "customer",
      name: (
        <div className="flex items-center gap-4">
          <User size={18} />
          <p>Customer</p>
        </div>
      ),
      description: (
        <Link
          href={`/users/${customer?._id}`}
          className="flex items-center gap-3"
        >
          <Avatar src={customer?.avatar || images.person} />
          <p>{customer?.username}</p>
        </Link>
      ),
    },
    {
      key: "address",
      name: (
        <div className="flex items-center gap-4">
          <Location size={18} />
          <p>Address</p>
        </div>
      ),
      description: <p className="min-w-[250px]">{address}</p>,
    },
    {
      key: "date",
      name: (
        <div className="flex items-center gap-4">
          <Date size={18} />
          <p>Date</p>
        </div>
      ),
      description: moment(date).fromNow(),
    },
    {
      key: "status",
      name: (
        <div className="flex items-center gap-4">
          <Date size={18} />
          <p>Status</p>
        </div>
      ),
      description: (
        <div
          className={`w-fit flex items-center gap-1 rounded-lg py-1 px-2 text-xs ${
            status === "Pending"
              ? "bg-lightOrange text-darkOrange"
              : "bg-lightGreen text-darkGreen"
          }`}
        >
          {status === "Pending" ? (
            <CircleClose size={12} />
          ) : (
            <CircleCheck size={12} />
          )}
          <p>{status}</p>
        </div>
      ),
    },
    {
      key: "paymentMethod",
      name: (
        <div className="flex items-center gap-4">
          <Dollar size={18} />
          <p>Payment Method</p>
        </div>
      ),

      description: (
        <div className="flex items-center gap-2">
          {paymentMethod === "Credit Card" ? (
            <CreditCard className="text-darkRose" size={18} />
          ) : paymentMethod === "Paypal" ? (
            <Paypal className="text-darkBlue" size={18} />
          ) : (
            <DollarBag className="text-darkGreen" size={18} />
          )}
          <p>{paymentMethod}</p>
        </div>
      ),
    },
  ];

  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
  ];

  return (
    <div className="w-full tableContanier">
      <Table
        dataSource={dataSourse}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
        className="w-full"
      />
    </div>
  );
};

export default OrderInformationTable;
