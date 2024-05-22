// actions
import { getCurrentAdmin } from "@/actions/admin";
// constants
import { accountPageBread } from "@/constants/breadcrumpItems";
import Account from "./ui/Account";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const AccountPage = async () => {
  try {
    const data = await getCurrentAdmin();

    if (data.code !== 200) {
      return <p>Error</p>;
    }
    return (
      <>
        <PageHeading title="Account Setting" />
        <CustomBreadcrumb items={accountPageBread} />
        <Account data={data.currentAdmin} />
      </>
    );
  } catch (error) {
    return <p>Error</p>;
  }
};

export default AccountPage;
