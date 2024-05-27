import { getAdmins } from "@/actions/admin";
import List from "./List";

const AdminsTab = async () => {
  try {
    const data = await getAdmins();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return <List data={JSON.parse(JSON.stringify(data.admins))} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default AdminsTab;
