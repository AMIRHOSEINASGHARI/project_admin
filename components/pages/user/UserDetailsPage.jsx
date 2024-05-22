// actions
import { getUser } from "@/actions/user";
// utils
import { shorterText } from "@/utils/functions";
// constants
import { userPageBread } from "@/constants/breadcrumpItems";
// cmp
import { Empty } from "antd";
import User from "./ui/User";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const UserDetailsPage = async ({ id }) => {
  try {
    const data = await getUser(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <>
        <PageHeading title={`User #${shorterText(id, 8)}`} />
        <CustomBreadcrumb items={userPageBread} />
        {!data.user ? (
          <div className="box border">
            <Empty description="No User!" />
          </div>
        ) : (
          <User user={data.user} />
        )}
      </>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default UserDetailsPage;
