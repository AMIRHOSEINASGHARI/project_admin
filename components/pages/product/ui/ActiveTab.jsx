// cmp
import CommentsTab from "./CommentsTab";
import OrdersTab from "./OrdersTab";
import LikesTab from "./LikesTab";
import { Tabs } from "antd";
import { BorderHeart, Comment, Truck } from "@/components/icons/Icons";

const ActiveTab = ({ comments, orders, likes }) => {
  const items = [
    {
      key: "Comments",
      label: (
        <div className="flex items-center gap-box">
          <Comment />
          <p>Comments</p>
        </div>
      ),
      children: <CommentsTab comments={comments} />,
    },
    {
      key: "Orders",
      label: (
        <div className="flex items-center gap-box">
          <Truck />
          <p>Orders</p>
        </div>
      ),
      children: <OrdersTab orders={orders} />,
    },
    {
      key: "Likes",
      label: (
        <div className="flex items-center gap-box">
          <BorderHeart />
          <p>Likes</p>
        </div>
      ),
      children: <LikesTab likes={likes} />,
    },
  ];
  return <Tabs defaultActiveKey="Comments" items={items} animated />;
};

export default ActiveTab;
