"use client";

// cmp
import { Avatar } from "antd";
// constants
import { images } from "@/constants";

const Avatars = ({ orders }) => {
  if (orders?.length !== 0) {
    return (
      <>
        {orders?.length !== 0 && (
          <Avatar.Group maxCount={2} maxPopoverTrigger="click" size="default">
            {orders.map((item) => (
              <Avatar
                key={item.orderId._id}
                src={item?.orderId?.userId?.avatar || images.person}
                size="default"
              />
            ))}
          </Avatar.Group>
        )}
      </>
    );
  } else {
    return null;
  }
};

export default Avatars;
