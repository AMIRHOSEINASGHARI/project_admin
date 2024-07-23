// next
import { notFound } from "next/navigation";
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
  const data = await getUser(id);

  if (!data.user) {
    notFound();
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
};

export default UserDetailsPage;
