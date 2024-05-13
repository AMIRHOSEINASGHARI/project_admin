// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";

const PagesLayout = async () => {
  const session = getServerSession();

  if (!session) {
    redirect("/login");
  }
  return <div>PagesLayout</div>;
};

export default PagesLayout;
