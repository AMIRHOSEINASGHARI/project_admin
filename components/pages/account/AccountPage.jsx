// constants
import { accountPageBread } from "@/constants/breadcrumpItems";
// cmp
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import GeneralTab from "./ui/tabs/general/GeneralTab";
import AdminsTab from "./ui/tabs/admins/AdminsTab";
import CreateUserTab from "./ui/tabs/create/CreateUserTab";
import { AddUser, Settings, Users } from "@/components/icons/Icons";
import { Tabs } from "antd";

const AccountPage = () => {
  const items = [
    {
      key: "general",
      label: (
        <div className="flex items-center gap-2">
          <Settings size={15} />
          <p className="text-h4">General</p>
        </div>
      ),
      children: <GeneralTab />,
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

  return (
    <>
      <PageHeading title="Account Setting" />
      <CustomBreadcrumb items={accountPageBread} />
      <Tabs defaultActiveKey="general" items={items} />
    </>
  );
};

export default AccountPage;
