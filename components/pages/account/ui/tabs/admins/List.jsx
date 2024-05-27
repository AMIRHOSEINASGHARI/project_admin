// constants
import { adminsColumns } from "@/constants/tableColumns";
import { adminsDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Table } from "antd";

const List = ({ data }) => {
  return (
    <div className="tableContainer">
      <Table
        columns={adminsColumns}
        dataSource={adminsDataSourse(data)}
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default List;
