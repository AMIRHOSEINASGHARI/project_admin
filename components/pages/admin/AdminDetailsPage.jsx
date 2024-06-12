// actions
import { getAdmin } from "@/actions/admin";
// constants
import { adminPageBread } from "@/constants/breadcrumpItems";
// cmp
import AdminProfile from "./ui/AdminProfile";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const AdminDetailsPage = async ({ id }) => {
  try {
    const data = await getAdmin(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <>
        <PageHeading title="Admin Page" />
        <CustomBreadcrumb items={adminPageBread} />
        <AdminProfile data={data.admin} />
      </>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default AdminDetailsPage;
