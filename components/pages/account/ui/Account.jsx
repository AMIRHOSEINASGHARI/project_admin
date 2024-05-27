// cmp
import GeneralTab from "./tabs/general/GeneralTab";
import AdminsTab from "./tabs/admins/AdminsTab";
import CreateUserTab from "./tabs/create/CreateUserTab";
import { Settings, Users, AddUser } from "@/components/icons/Icons";
import { Tabs } from "antd";

const Account = ({ data }) => {
  const items = [
    {
      key: "general",
      label: (
        <div className="flex items-center gap-2">
          <Settings size={15} />
          <p className="text-h4">General</p>
        </div>
      ),
      children: <GeneralTab data={data} />,
    },
    {
      key: "admins",
      label: (
        <div className="flex items-center gap-2">
          <Users size={15} />
          <p className="text-h4">Admins</p>
        </div>
      ),
      children: <AdminsTab />,
    },
    {
      key: "create",
      label: (
        <div className="flex items-center gap-2">
          <AddUser size={15} />
          <p className="text-h4">Create User</p>
        </div>
      ),
      children: <CreateUserTab />,
    },
  ];

  return <Tabs defaultActiveKey="general" items={items} />;
};

export default Account;
