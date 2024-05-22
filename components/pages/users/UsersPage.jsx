// actions
import { getUsers } from "@/actions/user";
// constants
import { usersPageBread } from "@/constants/breadcrumpItems";
// cmp
import { Empty } from "antd";
import UsersList from "./ui/UsersList";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const UsersPage = async () => {
  try {
    const data = await getUsers();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <>
        <PageHeading title="Users" />
        <CustomBreadcrumb items={usersPageBread} />
        {data.users.length === 0 ? (
          <div className="box border">
            <Empty description="No Users!" />
          </div>
        ) : (
          <UsersList users={JSON.parse(JSON.stringify(data.users))} />
        )}
      </>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default UsersPage;
