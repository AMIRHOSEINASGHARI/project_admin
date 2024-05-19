// actions
import { getUsers } from "@/actions/user";
// cmp
import { Empty } from "antd";
import UsersList from "./ui/UsersList";

const UsersPage = async () => {
  try {
    const data = await getUsers();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    if (data.users.length === 0) {
      return (
        <div className="box border">
          <Empty description="No Users!" />
        </div>
      );
    }
    return <UsersList users={JSON.parse(JSON.stringify(data.users))} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default UsersPage;
