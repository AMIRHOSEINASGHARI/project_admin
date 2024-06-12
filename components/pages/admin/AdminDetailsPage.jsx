// actions
import { getAdmin } from "@/actions/admin";
// cmp
import AdminProfile from "./ui/AdminProfile";

const AdminDetailsPage = async ({ id }) => {
  try {
    const data = await getAdmin(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return <AdminProfile data={data.admin} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default AdminDetailsPage;
