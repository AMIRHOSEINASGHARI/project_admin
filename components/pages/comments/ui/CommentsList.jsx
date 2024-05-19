// constants
import { commentsColumns } from "@/constants/tableColumns";
import { commentsDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Table } from "antd";

const CommentsList = ({ comments }) => {
  return (
    <div className="tableContanier">
      <Table
        columns={commentsColumns}
        dataSource={commentsDataSourse(comments)}
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default CommentsList;
