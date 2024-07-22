// constants
import { getComments } from "@/actions/comment";
import { commentsColumns } from "@/constants/tableColumns";
import { commentsDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Empty, Table } from "antd";

const CommentsList = async () => {
  const data = await getComments();

  return (
    <div className="tableContainer">
      {data.comments.length === 0 && <Empty description="No Comments!" />}
      {data.comments.length !== 0 && (
        <Table
          columns={commentsColumns}
          dataSource={commentsDataSourse(
            JSON.parse(JSON.stringify(data.comments))
          )}
          pagination={false}
          scroll={{ x: true }}
        />
      )}
    </div>
  );
};

export default CommentsList;
