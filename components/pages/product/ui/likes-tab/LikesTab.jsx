import { Empty } from "antd";
import React from "react";

const LikesTab = ({ likes }) => {
  if (likes.length === 0) {
    return <Empty description="No Likes!" />;
  }
  return <div>LikesTab</div>;
};

export default LikesTab;
