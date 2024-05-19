// constants
import { usersColumns } from "@/constants/tableColumns";
import { usersDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Table } from "antd";

const UsersList = ({ users }) => {
  return (
    <div className="tableContainer">
      <Table
        pagination={false}
        scroll={{ x: true }}
        columns={usersColumns}
        dataSource={usersDataSourse(users)}
      />
    </div>
  );
};

export default UsersList;
