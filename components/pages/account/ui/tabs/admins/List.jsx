// constants
import { adminsColumns } from "@/constants/tableColumns";
import { adminsDataSourse } from "@/constants/tableDataSourse";
import { getServerSession } from "@/utils/session";
// cmp
import { Table } from "antd";

const List = ({ data }) => {
  const session = getServerSession();

  return (
    <div className="tableContainer">
      <Table
        columns={adminsColumns}
        dataSource={adminsDataSourse(data, session.userId)}
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default List;
