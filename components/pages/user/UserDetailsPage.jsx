// actions
import { getUser } from "@/actions/user";
// cmp
import { Empty } from "antd";
import User from "./ui/User";

const UserDetailsPage = async ({ id }) => {
  try {
    const data = await getUser(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    if (!data.user) {
      return (
        <div className="box border">
          <Empty description="No User!" />
        </div>
      );
    }

    return <User user={data.user} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default UserDetailsPage;
