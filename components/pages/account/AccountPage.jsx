import { getCurrentAdmin } from "@/actions/admin";
import Account from "./ui/Account";

const AccountPage = async () => {
  try {
    const data = await getCurrentAdmin();

    if (data.code !== 200) {
      return <p>Error</p>;
    }
    return <Account data={data.currentAdmin} />;
  } catch (error) {
    return <p>Error</p>;
  }
};

export default AccountPage;
