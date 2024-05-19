import UserDetailsPage from "@/components/pages/user/UserDetailsPage";

const User = ({ params }) => {
  return <UserDetailsPage id={params.id} />;
};

export default User;
