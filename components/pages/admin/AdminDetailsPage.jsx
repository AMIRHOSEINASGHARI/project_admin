// react
import { Suspense } from "react";
// constants
import { adminPageBread } from "@/constants/breadcrumpItems";
// cmp
import AdminProfile from "./ui/AdminProfile";
import PageHeading from "@/components/shared/PageHeading";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import LoaderBar from "@/components/shared/LoaderBar";

const AdminDetailsPage = async ({ id }) => {
  return (
    <>
      <PageHeading title="Admin Page" />
      <CustomBreadcrumb items={adminPageBread} />
      <Suspense fallback={<LoaderBar />}>
        <AdminProfile id={id} />
      </Suspense>
    </>
  );
};

export default AdminDetailsPage;
