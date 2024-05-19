// constants
import { userCommentsColumns } from "@/constants/tableColumns";
import { userCommentsDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Empty, Table } from "antd";

const UserComments = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <div className="box w-full">
        <Empty description="No Comments!" />
      </div>
    );
  }

  return (
    <div className="w-full tableContainer border-none">
      <Table
        columns={userCommentsColumns}
        dataSource={userCommentsDataSourse(comments)}
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default UserComments;
