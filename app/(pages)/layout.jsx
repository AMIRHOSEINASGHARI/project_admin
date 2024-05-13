// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";
import Sidebar from "@/components/shared/layout/Sidebar";

const PagesLayout = async ({ children }) => {
  const session = getServerSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <Sidebar />
      <div className="pages_spaces">
        {session.roll === "USER" ? (
          "not allowed"
        ) : (
          <div className="space-y-[20px]">
            <div>{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesLayout;
