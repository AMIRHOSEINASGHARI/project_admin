// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";

const AuthLayout = async ({ children }) => {
  const session = getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return <main>{children}</main>;
};

export default AuthLayout;
