// cmp
import AdminDetailsPage from "@/components/pages/admin/AdminDetailsPage";

const Admin = ({ params }) => {
  return <AdminDetailsPage id={params.id} />;
};

export default Admin;
