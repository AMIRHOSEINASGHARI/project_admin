// constants
import { getUsers } from "@/actions/user";
import { usersColumns } from "@/constants/tableColumns";
import { usersDataSourse } from "@/constants/tableDataSourse";
// cmp
import { Table } from "antd";

const UsersList = async () => {
  const data = await getUsers();

  return (
    <div className="tableContainer">
      <Table
        pagination={false}
        scroll={{ x: true }}
        columns={usersColumns}
        dataSource={usersDataSourse(JSON.parse(JSON.stringify(data.users)))}
      />
    </div>
  );
};

export default UsersList;
