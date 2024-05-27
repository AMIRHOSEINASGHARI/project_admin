import UserDetailsPage from "@/components/pages/user/UserDetailsPage";

export const dynamic = "force-dynamic";

const User = ({ params }) => {
  return <UserDetailsPage id={params.id} />;
};

export default User;
