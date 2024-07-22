// react
import { Suspense } from "react";
// constants
import { usersPageBread } from "@/constants/breadcrumpItems";
// cmp
import UsersList from "./ui/UsersList";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import LoaderBar from "@/components/shared/LoaderBar";

const UsersPage = () => {
  return (
    <>
      <PageHeading title="Users" />
      <CustomBreadcrumb items={usersPageBread} />
      <Suspense fallback={<LoaderBar />}>
        <UsersList />
      </Suspense>
    </>
  );
};

export default UsersPage;
