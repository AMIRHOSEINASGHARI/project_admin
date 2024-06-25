"use client";

// constants
import { userLikesColumns } from "@/constants/tableColumns";
import { userLikesDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Empty, Table } from "antd";

const UserLikes = ({ likes }) => {
  if (likes.length === 0) {
    return (
      <div className="box w-full">
        <Empty description="No Likes!" />
      </div>
    );
  }

  return (
    <div className="w-full tableContainer border-none">
      <Table
        columns={userLikesColumns}
        dataSource={userLikesDataSourse(likes)}
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default UserLikes;
