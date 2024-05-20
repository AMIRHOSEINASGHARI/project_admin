// constants
import { blogsColumns } from "@/constants/tableColumns";
import { blogsDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Table } from "antd";

const BlogsList = ({ blogs }) => {
  return (
    <div className="tableContainer">
      <Table
        pagination={{
          pageSize: 10,
        }}
        scroll={{ x: true }}
        columns={blogsColumns}
        dataSource={blogsDataSourse(blogs)}
      />
    </div>
  );
};

export default BlogsList;
