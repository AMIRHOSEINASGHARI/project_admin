// cmp
import CommentsTab from "./comment-tab/CommentsTab";
import OrdersTab from "./orders-tab/OrdersTab";
import LikesTab from "./likes-tab/LikesTab";
import { Tabs } from "antd";
import { BorderHeart, Comment, Truck } from "@/components/icons/Icons";

const ActiveTab = ({ comments, orders, likes, productId }) => {
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
      children: (
        <OrdersTab
          orders={JSON.parse(JSON.stringify(orders))}
          productId={JSON.parse(JSON.stringify(productId))}
        />
      ),
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
  return (
    <Tabs
      defaultActiveKey="Comments"
      items={items}
      animated
      className="box border"
    />
  );
};

export default ActiveTab;
