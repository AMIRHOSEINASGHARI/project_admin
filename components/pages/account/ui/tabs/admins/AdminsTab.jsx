// actions
import { getAdmins } from "@/actions/admin";
// cmp
import List from "./List";

const AdminsTab = async () => {
  const data = await getAdmins();

  return <List data={JSON.parse(JSON.stringify(data.admins))} />;
};

export default AdminsTab;
