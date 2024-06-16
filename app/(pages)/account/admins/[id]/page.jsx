// cmp
import AdminDetailsPage from "@/components/pages/admin/AdminDetailsPage";

export const dynamic = "force-dynamic";

const Admin = ({ params }) => {
  return <AdminDetailsPage id={params.id} />;
};

export default Admin;
